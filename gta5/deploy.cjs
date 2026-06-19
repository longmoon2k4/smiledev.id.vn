const ftp = require("basic-ftp");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const client = new ftp.Client();
const localRoot = path.join(__dirname, "dist");
const remoteRoot = "public_html/gta5/";

function countLocalBytes(dirPath) {
    let total = 0;
    for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
        const full = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
            total += countLocalBytes(full);
        } else {
            total += fs.statSync(full).size;
        }
    }
    return total;
}

function renderProgress(current, total, label) {
    const width = 24;
    const ratio = total === 0 ? 1 : current / total;
    const clampedRatio = Math.max(0, Math.min(1, ratio));
    const filled = Math.max(0, Math.min(width, Math.round(width * clampedRatio)));
    const bar = `${"█".repeat(filled)}${"░".repeat(width - filled)}`;
    const percent = Math.min(100, Math.max(0, Math.round(clampedRatio * 100)));
    process.stdout.write(`\r${label} [${bar}] ${percent}% (${current}/${total})`);
    if (current >= total) process.stdout.write("\n");
}

async function deploy() {
    try {
        console.log("Đang tiến hành deploy GTA5 lên hosting... ⏳");
        const totalBytes = countLocalBytes(localRoot);
        let uploadedBytes = 0;

        await client.access({
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            password: process.env.FTP_PASS,
            port: 21,
            secure: false,
        });

        try { await client.removeDir(remoteRoot); } catch (e) { }
        await client.ensureDir(remoteRoot);

        client.trackProgress(info => {
            uploadedBytes = info.bytesOverall || uploadedBytes;
            renderProgress(Math.min(uploadedBytes, totalBytes), totalBytes, "GTA5 (B)");
        });

        await client.uploadFromDir(localRoot, remoteRoot);

        console.log("✅ Đã deploy GTA5 thành công lên hosting! 🚀");
    } catch (err) {
        console.error("❌ Lỗi khi deploy GTA5:", err);
        process.exitCode = 1;
    } finally {
        client.close();
    }
}

deploy();
