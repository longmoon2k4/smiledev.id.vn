const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();
require("dotenv").config();

const config = {
    host: process.env.FTP_HOST,
    user: process.env.FTP_USER,
    password: process.env.FTP_PASS,
    port: 21,
    
    // Thư mục chứa code sau khi build ở máy bạn
    localRoot: __dirname + "/dist", 
    
    // Đã sửa lại đúng đường dẫn bạn cung cấp (thêm public_html để web chạy được)
    remoteRoot: "public_html/", 
    
    include: ["*", "**/*"],      
    deleteRemote: true,         
    forcePasv: true             
}; 

console.log("Đang tiến hành deploy lên hosting... ⏳");

ftpDeploy.deploy(config)
    .then(res => console.log("✅ Đã deploy thành công lên hosting! 🚀"))
    .catch(err => {
        console.error("❌ Lỗi khi deploy:", err);
        process.exit(1);
    });

// (Tùy chọn) Hiển thị tiến trình upload từng file
ftpDeploy.on("uploading", function(data) {
    console.log(`Đang tải lên: ${data.filename} (${data.transferredFileCount} / ${data.totalFilesCount})`);
});