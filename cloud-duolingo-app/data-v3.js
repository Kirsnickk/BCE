/* CloudOps Duo v3 daily roadmap layer.
   Generated from Task/KE_HOACH_HOC_3_GIO_MOI_NGAY.md.
   Does not modify/duplicate data.js or data-v2.js lesson/lab banks; days point to existing lessonRef/question ids.
*/
(() => {
  const D = window.CLOUD_APP_DATA;
  D.version = '3.0.0';
  D.description = 'CloudOps Duo v3: lộ trình 26 tuần theo ngày, mỗi ngày 3 giờ: Lý thuyết → Lab → Review.';
  D.dayPlanMeta = {
    version: '3.0.0',
    totalWeeks: 26,
    totalDays: 182,
    defaultBudgetMinutes: 180,
    sourceOfTruth: '../Task/KE_HOACH_HOC_3_GIO_MOI_NGAY.md',
    rule: 'summary tự biên soạn; không copy transcript; lab/review tái dùng lesson/question/labSim hiện có.'
  };
  D.dailyPlan = [
  {
    "id": "d001",
    "dayNumber": 1,
    "week": 1,
    "dayOfWeek": "Mon",
    "phaseId": "p1",
    "title": "Filesystem hierarchy, đường dẫn tuyệt đối/tương đối, pwd, ls, cd, mkdir, cp, mv",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Filesystem hierarchy, đường dẫn tuyệt đối/tương đối, pwd, ls, cd, mkdir, cp, mv. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tạo sandbox ~/cloud-labs/week01; thực hiện 25 lệnh điều hướng và thao tác file, rồi dùng find kiểm tra cấu trúc. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Filesystem hierarchy, đường dẫn tuyệt đối/tương đối, pwd, ls, cd, mkdir, cp, mv.",
        "Lab: Tạo sandbox ~/cloud-labs/week01; thực hiện 25 lệnh điều hướng và thao tác file, rồi dùng find kiểm tra cấu trúc.",
        "Debug/review: Không nhìn tài liệu, tái tạo cấu trúc app/logs/config/backups; giải thích khi dùng đường dẫn tuyệt đối.",
        "Evidence: Lưu commands-day01.md; chụp terminal; commit docs: add linux filesystem lab."
      ],
      "sources": [
        {
          "title": "Linux man-pages project",
          "org": "Linux man-pages",
          "url": "https://man7.org/linux/man-pages/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Beginners Intro to Command-line",
          "org": "The Linux Foundation",
          "url": "https://www.youtube.com/watch?v=N850L5Kv4Pg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l1",
      "realWorldContext": "JD Junior DevOps/Infrastructure thường bắt đầu bằng ticket Linux: đọc log, kiểm tra service, quyền file và rollback trước khi đụng hệ thống thật. Ngày này gắn với artifact: Lưu commands-day01.md; chụp terminal; commit docs: add linux filesystem lab.",
      "guidedTask": "Tạo sandbox ~/cloud-labs/week01; thực hiện 25 lệnh điều hướng và thao tác file, rồi dùng find kiểm tra cấu trúc.",
      "debugTask": "Không nhìn tài liệu, tái tạo cấu trúc app/logs/config/backups; giải thích khi dùng đường dẫn tuyệt đối.",
      "evidenceTask": "Lưu commands-day01.md; chụp terminal; commit docs: add linux filesystem lab."
    },
    "reviewQuestionIds": [
      "p1l1q1",
      "p1l1q2",
      "p1l1q3",
      "p1l1q4",
      "p1l1q5",
      "p1l1q6"
    ]
  },
  {
    "id": "d002",
    "dayNumber": 2,
    "week": 1,
    "dayOfWeek": "Tue",
    "phaseId": "p1",
    "title": "Users, groups, sudo, permission rwx, chmod, chown, umask và nguyên tắc least privilege",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Users, groups, sudo, permission rwx, chmod, chown, umask và nguyên tắc least privilege. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tạo user/group lab; tạo file owner-only, group-readable và public-read; xác minh bằng ls -l và thử truy cập từ user khác. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Users, groups, sudo, permission rwx, chmod, chown, umask và nguyên tắc least privilege.",
        "Lab: Tạo user/group lab; tạo file owner-only, group-readable và public-read; xác minh bằng ls -l và thử truy cập từ user khác.",
        "Debug/review: Thiết kế quyền cho /srv/webapp gồm deployer, nginx và auditor; ghi rõ vì sao chọn 750/640.",
        "Evidence: Lưu permissions-runbook.md cùng output id, groups, ls -l."
      ],
      "sources": [
        {
          "title": "Linux man-pages project",
          "org": "Linux man-pages",
          "url": "https://man7.org/linux/man-pages/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Beginners Intro to Command-line",
          "org": "The Linux Foundation",
          "url": "https://www.youtube.com/watch?v=N850L5Kv4Pg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l1",
      "realWorldContext": "JD Junior DevOps/Infrastructure thường bắt đầu bằng ticket Linux: đọc log, kiểm tra service, quyền file và rollback trước khi đụng hệ thống thật. Ngày này gắn với artifact: Lưu permissions-runbook.md cùng output id, groups, ls -l.",
      "guidedTask": "Tạo user/group lab; tạo file owner-only, group-readable và public-read; xác minh bằng ls -l và thử truy cập từ user khác.",
      "debugTask": "Thiết kế quyền cho /srv/webapp gồm deployer, nginx và auditor; ghi rõ vì sao chọn 750/640.",
      "evidenceTask": "Lưu permissions-runbook.md cùng output id, groups, ls -l."
    },
    "reviewQuestionIds": [
      "p1l1q1",
      "p1l1q2",
      "p1l1q3",
      "p1l1q4",
      "p1l1q5",
      "p1l1q6"
    ]
  },
  {
    "id": "d003",
    "dayNumber": 3,
    "week": 1,
    "dayOfWeek": "Wed",
    "phaseId": "p1",
    "title": "Text pipeline: grep, cut, sort, uniq, awk, tail, redirect và exit code",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Text pipeline: grep, cut, sort, uniq, awk, tail, redirect và exit code. Phần lab biến kiến thức thành thao tác kiểm chứng được: Dùng access log mẫu: lọc 404/500, đếm top IP, top URL và export một báo cáo text. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Text pipeline: grep, cut, sort, uniq, awk, tail, redirect và exit code.",
        "Lab: Dùng access log mẫu: lọc 404/500, đếm top IP, top URL và export một báo cáo text.",
        "Debug/review: Viết log-analysis.sh nhận đường dẫn log; thêm set -euo pipefail và test input không tồn tại.",
        "Evidence: Lưu script, sample output và 3 phát hiện từ log; commit."
      ],
      "sources": [
        {
          "title": "Linux man-pages project",
          "org": "Linux man-pages",
          "url": "https://man7.org/linux/man-pages/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Beginners Intro to Command-line",
          "org": "The Linux Foundation",
          "url": "https://www.youtube.com/watch?v=N850L5Kv4Pg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l1",
      "realWorldContext": "JD Junior DevOps/Infrastructure thường bắt đầu bằng ticket Linux: đọc log, kiểm tra service, quyền file và rollback trước khi đụng hệ thống thật. Ngày này gắn với artifact: Lưu script, sample output và 3 phát hiện từ log; commit.",
      "guidedTask": "Dùng access log mẫu: lọc 404/500, đếm top IP, top URL và export một báo cáo text.",
      "debugTask": "Viết log-analysis.sh nhận đường dẫn log; thêm set -euo pipefail và test input không tồn tại.",
      "evidenceTask": "Lưu script, sample output và 3 phát hiện từ log; commit."
    },
    "reviewQuestionIds": [
      "p1l1q1",
      "p1l1q2",
      "p1l1q3",
      "p1l1q4",
      "p1l1q5",
      "p1l1q6"
    ]
  },
  {
    "id": "d004",
    "dayNumber": 4,
    "week": 1,
    "dayOfWeek": "Thu",
    "phaseId": "p1",
    "title": "Process, PID/PPID, foreground/background, signal, ps, top, pgrep, kill, nice",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Process, PID/PPID, foreground/background, signal, ps, top, pgrep, kill, nice. Phần lab biến kiến thức thành thao tác kiểm chứng được: Chạy process lab; quan sát CPU/memory; gửi SIGTERM rồi kiểm tra process đã dừng trước khi thử SIGKILL. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Process, PID/PPID, foreground/background, signal, ps, top, pgrep, kill, nice.",
        "Lab: Chạy process lab; quan sát CPU/memory; gửi SIGTERM rồi kiểm tra process đã dừng trước khi thử SIGKILL.",
        "Debug/review: Giải case “web chậm”: viết thứ tự lệnh thu thập bằng chứng trước khi restart process.",
        "Evidence: Lưu process-triage.md có PID, dấu hiệu và rollback note."
      ],
      "sources": [
        {
          "title": "Linux man-pages project",
          "org": "Linux man-pages",
          "url": "https://man7.org/linux/man-pages/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Beginners Intro to Command-line",
          "org": "The Linux Foundation",
          "url": "https://www.youtube.com/watch?v=N850L5Kv4Pg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l1",
      "realWorldContext": "JD Junior DevOps/Infrastructure thường bắt đầu bằng ticket Linux: đọc log, kiểm tra service, quyền file và rollback trước khi đụng hệ thống thật. Ngày này gắn với artifact: Lưu process-triage.md có PID, dấu hiệu và rollback note.",
      "guidedTask": "Chạy process lab; quan sát CPU/memory; gửi SIGTERM rồi kiểm tra process đã dừng trước khi thử SIGKILL.",
      "debugTask": "Giải case “web chậm”: viết thứ tự lệnh thu thập bằng chứng trước khi restart process.",
      "evidenceTask": "Lưu process-triage.md có PID, dấu hiệu và rollback note."
    },
    "reviewQuestionIds": [
      "p1l1q1",
      "p1l1q2",
      "p1l1q3",
      "p1l1q4",
      "p1l1q5",
      "p1l1q6"
    ]
  },
  {
    "id": "d005",
    "dayNumber": 5,
    "week": 1,
    "dayOfWeek": "Fri",
    "phaseId": "p1",
    "title": "systemd unit: service, daemon-reload, enable, status, journal và nguyên tắc không chạy app bằng root",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào systemd unit: service, daemon-reload, enable, status, journal và nguyên tắc không chạy app bằng root. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tạo app HTTP Python tối thiểu và unit file; nếu WSL chưa bật systemd, dùng unit mẫu + Docker để mô phỏng lifecycle. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: systemd unit: service, daemon-reload, enable, status, journal và nguyên tắc không chạy app bằng root.",
        "Lab: Tạo app HTTP Python tối thiểu và unit file; nếu WSL chưa bật systemd, dùng unit mẫu + Docker để mô phỏng lifecycle.",
        "Debug/review: Cố ý sửa ExecStart sai; dùng systemctl status và journalctl -u để tìm, sửa và xác minh.",
        "Evidence: Lưu unit file, service-runbook.md, ảnh/status trước-sau."
      ],
      "sources": [
        {
          "title": "Linux man-pages project",
          "org": "Linux man-pages",
          "url": "https://man7.org/linux/man-pages/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Beginners Intro to Command-line",
          "org": "The Linux Foundation",
          "url": "https://www.youtube.com/watch?v=N850L5Kv4Pg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l1",
      "realWorldContext": "JD Junior DevOps/Infrastructure thường bắt đầu bằng ticket Linux: đọc log, kiểm tra service, quyền file và rollback trước khi đụng hệ thống thật. Ngày này gắn với artifact: Lưu unit file, service-runbook.md, ảnh/status trước-sau.",
      "guidedTask": "Tạo app HTTP Python tối thiểu và unit file; nếu WSL chưa bật systemd, dùng unit mẫu + Docker để mô phỏng lifecycle.",
      "debugTask": "Cố ý sửa ExecStart sai; dùng systemctl status và journalctl -u để tìm, sửa và xác minh.",
      "evidenceTask": "Lưu unit file, service-runbook.md, ảnh/status trước-sau."
    },
    "reviewQuestionIds": [
      "p1l1q1",
      "p1l1q2",
      "p1l1q3",
      "p1l1q4",
      "p1l1q5",
      "p1l1q6"
    ]
  },
  {
    "id": "d006",
    "dayNumber": 6,
    "week": 1,
    "dayOfWeek": "Sat",
    "phaseId": "p1",
    "title": "APT, repository, package lifecycle, port listening và health check HTTP",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào APT, repository, package lifecycle, port listening và health check HTTP. Phần lab biến kiến thức thành thao tác kiểm chứng được: Cài hoặc kiểm tra Nginx trong lab; dùng ss -tulnp, curl -I, systemctl status để xác minh port 80. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: APT, repository, package lifecycle, port listening và health check HTTP.",
        "Lab: Cài hoặc kiểm tra Nginx trong lab; dùng ss -tulnp, curl -I, systemctl status để xác minh port 80.",
        "Debug/review: Đổi trang index và tạo endpoint/response nhận diện môi trường; kiểm tra từ terminal mới.",
        "Evidence: Lưu nginx-install-runbook.md, lệnh rollback/gỡ package và screenshot."
      ],
      "sources": [
        {
          "title": "Linux man-pages project",
          "org": "Linux man-pages",
          "url": "https://man7.org/linux/man-pages/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Beginners Intro to Command-line",
          "org": "The Linux Foundation",
          "url": "https://www.youtube.com/watch?v=N850L5Kv4Pg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l1",
      "realWorldContext": "JD Junior DevOps/Infrastructure thường bắt đầu bằng ticket Linux: đọc log, kiểm tra service, quyền file và rollback trước khi đụng hệ thống thật. Ngày này gắn với artifact: Lưu nginx-install-runbook.md, lệnh rollback/gỡ package và screenshot.",
      "guidedTask": "Cài hoặc kiểm tra Nginx trong lab; dùng ss -tulnp, curl -I, systemctl status để xác minh port 80.",
      "debugTask": "Đổi trang index và tạo endpoint/response nhận diện môi trường; kiểm tra từ terminal mới.",
      "evidenceTask": "Lưu nginx-install-runbook.md, lệnh rollback/gỡ package và screenshot."
    },
    "reviewQuestionIds": [
      "p1l1q1",
      "p1l1q2",
      "p1l1q3",
      "p1l1q4",
      "p1l1q5",
      "p1l1q6"
    ]
  },
  {
    "id": "d007",
    "dayNumber": 7,
    "week": 1,
    "dayOfWeek": "Sun",
    "phaseId": "p1",
    "title": "Ôn tuần: filesystem → quyền → log → process → service. Phân biệt quan sát với hành động sửa",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Ôn tuần: filesystem → quyền → log → process → service. Phân biệt quan sát với hành động sửa. Phần lab biến kiến thức thành thao tác kiểm chứng được: Làm scenario 45 phút: service Nginx không trả 200; điều tra bằng status, journal, port, curl và permission. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Ôn tuần: filesystem → quyền → log → process → service. Phân biệt quan sát với hành động sửa.",
        "Lab: Làm scenario 45 phút: service Nginx không trả 200; điều tra bằng status, journal, port, curl và permission.",
        "Debug/review: Viết runbook 1 trang từ memory; so với ghi chú rồi bổ sung phần còn thiếu.",
        "Evidence: Tạo week01-retro.md: 3 điều biết, 2 lỗi gặp, 1 hành động tuần sau; commit/push."
      ],
      "sources": [
        {
          "title": "Linux man-pages project",
          "org": "Linux man-pages",
          "url": "https://man7.org/linux/man-pages/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Beginners Intro to Command-line",
          "org": "The Linux Foundation",
          "url": "https://www.youtube.com/watch?v=N850L5Kv4Pg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l1",
      "realWorldContext": "JD Junior DevOps/Infrastructure thường bắt đầu bằng ticket Linux: đọc log, kiểm tra service, quyền file và rollback trước khi đụng hệ thống thật. Ngày này gắn với artifact: Tạo week01-retro.md: 3 điều biết, 2 lỗi gặp, 1 hành động tuần sau; commit/push.",
      "guidedTask": "Làm scenario 45 phút: service Nginx không trả 200; điều tra bằng status, journal, port, curl và permission.",
      "debugTask": "Viết runbook 1 trang từ memory; so với ghi chú rồi bổ sung phần còn thiếu.",
      "evidenceTask": "Tạo week01-retro.md: 3 điều biết, 2 lỗi gặp, 1 hành động tuần sau; commit/push."
    },
    "reviewQuestionIds": [
      "p1l1q1",
      "p1l1q2",
      "p1l1q3",
      "p1l1q4",
      "p1l1q5",
      "p1l1q6"
    ]
  },
  {
    "id": "d008",
    "dayNumber": 8,
    "week": 2,
    "dayOfWeek": "Mon",
    "phaseId": "p1",
    "title": "Filesystem capacity: df, du, inode, mount, file mở đã xóa, log rotation và cleanup an toàn",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Filesystem capacity: df, du, inode, mount, file mở đã xóa, log rotation và cleanup an toàn. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tạo file lớn trong lab; đo df -h, du -sh, df -i; mô phỏng log directory tăng dung lượng. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Filesystem capacity: df, du, inode, mount, file mở đã xóa, log rotation và cleanup an toàn.",
        "Lab: Tạo file lớn trong lab; đo df -h, du -sh, df -i; mô phỏng log directory tăng dung lượng.",
        "Debug/review: Viết checklist quyết định dọn disk: đo → xác định owner → backup → xóa có kiểm soát → xác minh.",
        "Evidence: Lưu disk-cleanup-runbook.md; ghi rõ lệnh không được chạy bừa."
      ],
      "sources": [
        {
          "title": "iproute2 and Linux networking man pages",
          "org": "Linux man-pages",
          "url": "https://man7.org/linux/man-pages/man8/ip.8.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Beginners Intro to Command-line",
          "org": "The Linux Foundation",
          "url": "https://www.youtube.com/watch?v=N850L5Kv4Pg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l2",
      "realWorldContext": "CloudOps tại VN cần debug DNS, port, route và HTTP theo lớp; case website không truy cập được thường sai ở DNS, route, firewall hoặc service listener. Ngày này gắn với artifact: Lưu disk-cleanup-runbook.md; ghi rõ lệnh không được chạy bừa.",
      "guidedTask": "Tạo file lớn trong lab; đo df -h, du -sh, df -i; mô phỏng log directory tăng dung lượng.",
      "debugTask": "Viết checklist quyết định dọn disk: đo → xác định owner → backup → xóa có kiểm soát → xác minh.",
      "evidenceTask": "Lưu disk-cleanup-runbook.md; ghi rõ lệnh không được chạy bừa."
    },
    "reviewQuestionIds": [
      "p1l2q1",
      "p1l2q2",
      "p1l2q3",
      "p1l2q4",
      "p1l2q5",
      "p1l2q6"
    ]
  },
  {
    "id": "d009",
    "dayNumber": 9,
    "week": 2,
    "dayOfWeek": "Tue",
    "phaseId": "p1",
    "title": "Bash variables, quotes, conditionals, loops, functions, set -euo pipefail, stderr và exit code",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Bash variables, quotes, conditionals, loops, functions, set -euo pipefail, stderr và exit code. Phần lab biến kiến thức thành thao tác kiểm chứng được: Viết backup.sh: validate input, nén thư mục lab, timestamp, checksum và retention 3 bản sao. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Bash variables, quotes, conditionals, loops, functions, set -euo pipefail, stderr và exit code.",
        "Lab: Viết backup.sh: validate input, nén thư mục lab, timestamp, checksum và retention 3 bản sao.",
        "Debug/review: Test 3 case: thành công, source thiếu, destination không ghi được; sửa message lỗi rõ ràng.",
        "Evidence: Lưu script + test-results.md; commit feat: add safe backup script."
      ],
      "sources": [
        {
          "title": "iproute2 and Linux networking man pages",
          "org": "Linux man-pages",
          "url": "https://man7.org/linux/man-pages/man8/ip.8.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Beginners Intro to Command-line",
          "org": "The Linux Foundation",
          "url": "https://www.youtube.com/watch?v=N850L5Kv4Pg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l2",
      "realWorldContext": "CloudOps tại VN cần debug DNS, port, route và HTTP theo lớp; case website không truy cập được thường sai ở DNS, route, firewall hoặc service listener. Ngày này gắn với artifact: Lưu script + test-results.md; commit feat: add safe backup script.",
      "guidedTask": "Viết backup.sh: validate input, nén thư mục lab, timestamp, checksum và retention 3 bản sao.",
      "debugTask": "Test 3 case: thành công, source thiếu, destination không ghi được; sửa message lỗi rõ ràng.",
      "evidenceTask": "Lưu script + test-results.md; commit feat: add safe backup script."
    },
    "reviewQuestionIds": [
      "p1l2q1",
      "p1l2q2",
      "p1l2q3",
      "p1l2q4",
      "p1l2q5",
      "p1l2q6"
    ]
  },
  {
    "id": "d010",
    "dayNumber": 10,
    "week": 2,
    "dayOfWeek": "Wed",
    "phaseId": "p1",
    "title": "TCP/IP, IP/private range, default gateway, ARP, route table, SSH key authentication, scp/rsync",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào TCP/IP, IP/private range, default gateway, ARP, route table, SSH key authentication, scp/rsync. Phần lab biến kiến thức thành thao tác kiểm chứng được: Kiểm tra ip addr, ip route, ping, ssh -V; tạo SSH key lab và chuyển file giữa hai thư mục/host được phép. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: TCP/IP, IP/private range, default gateway, ARP, route table, SSH key authentication, scp/rsync.",
        "Lab: Kiểm tra ip addr, ip route, ping, ssh -V; tạo SSH key lab và chuyển file giữa hai thư mục/host được phép.",
        "Debug/review: Viết runbook chuyển backup.tar.gz bằng rsync -avz và cách xác minh checksum.",
        "Evidence: Lưu ssh-file-transfer.md và public-key hygiene note."
      ],
      "sources": [
        {
          "title": "iproute2 and Linux networking man pages",
          "org": "Linux man-pages",
          "url": "https://man7.org/linux/man-pages/man8/ip.8.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Beginners Intro to Command-line",
          "org": "The Linux Foundation",
          "url": "https://www.youtube.com/watch?v=N850L5Kv4Pg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l2",
      "realWorldContext": "CloudOps tại VN cần debug DNS, port, route và HTTP theo lớp; case website không truy cập được thường sai ở DNS, route, firewall hoặc service listener. Ngày này gắn với artifact: Lưu ssh-file-transfer.md và public-key hygiene note.",
      "guidedTask": "Kiểm tra ip addr, ip route, ping, ssh -V; tạo SSH key lab và chuyển file giữa hai thư mục/host được phép.",
      "debugTask": "Viết runbook chuyển backup.tar.gz bằng rsync -avz và cách xác minh checksum.",
      "evidenceTask": "Lưu ssh-file-transfer.md và public-key hygiene note."
    },
    "reviewQuestionIds": [
      "p1l2q1",
      "p1l2q2",
      "p1l2q3",
      "p1l2q4",
      "p1l2q5",
      "p1l2q6"
    ]
  },
  {
    "id": "d011",
    "dayNumber": 11,
    "week": 2,
    "dayOfWeek": "Thu",
    "phaseId": "p1",
    "title": "DNS, HTTP methods/status, TLS handshake, headers và phân tầng sự cố DNS vs TCP vs HTTP",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào DNS, HTTP methods/status, TLS handshake, headers và phân tầng sự cố DNS vs TCP vs HTTP. Phần lab biến kiến thức thành thao tác kiểm chứng được: Dùng nslookup/dig, curl -Iv, openssl s_client với domain công khai; ghi IP, status, certificate issuer/expiry. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: DNS, HTTP methods/status, TLS handshake, headers và phân tầng sự cố DNS vs TCP vs HTTP.",
        "Lab: Dùng nslookup/dig, curl -Iv, openssl s_client với domain công khai; ghi IP, status, certificate issuer/expiry.",
        "Debug/review: Tạo decision tree “không mở được website”: DNS → route/port → TLS → HTTP/app.",
        "Evidence: Lưu web-connectivity-checklist.md cùng 1 output thật đã ẩn dữ liệu nhạy cảm."
      ],
      "sources": [
        {
          "title": "iproute2 and Linux networking man pages",
          "org": "Linux man-pages",
          "url": "https://man7.org/linux/man-pages/man8/ip.8.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Beginners Intro to Command-line",
          "org": "The Linux Foundation",
          "url": "https://www.youtube.com/watch?v=N850L5Kv4Pg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l2",
      "realWorldContext": "CloudOps tại VN cần debug DNS, port, route và HTTP theo lớp; case website không truy cập được thường sai ở DNS, route, firewall hoặc service listener. Ngày này gắn với artifact: Lưu web-connectivity-checklist.md cùng 1 output thật đã ẩn dữ liệu nhạy cảm.",
      "guidedTask": "Dùng nslookup/dig, curl -Iv, openssl s_client với domain công khai; ghi IP, status, certificate issuer/expiry.",
      "debugTask": "Tạo decision tree “không mở được website”: DNS → route/port → TLS → HTTP/app.",
      "evidenceTask": "Lưu web-connectivity-checklist.md cùng 1 output thật đã ẩn dữ liệu nhạy cảm."
    },
    "reviewQuestionIds": [
      "p1l2q1",
      "p1l2q2",
      "p1l2q3",
      "p1l2q4",
      "p1l2q5",
      "p1l2q6"
    ]
  },
  {
    "id": "d012",
    "dayNumber": 12,
    "week": 2,
    "dayOfWeek": "Fri",
    "phaseId": "p1",
    "title": "Troubleshooting network: ss, netstat, traceroute, firewall/security boundary và cách đọc timeout/refused",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Troubleshooting network: ss, netstat, traceroute, firewall/security boundary và cách đọc timeout/refused. Phần lab biến kiến thức thành thao tác kiểm chứng được: Mô phỏng app nghe sai port hoặc firewall local chặn port; dùng ss, curl, log để xác định nguyên nhân. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Troubleshooting network: ss, netstat, traceroute, firewall/security boundary và cách đọc timeout/refused.",
        "Lab: Mô phỏng app nghe sai port hoặc firewall local chặn port; dùng ss, curl, log để xác định nguyên nhân.",
        "Debug/review: Viết 5 giả thuyết cho “website down” và phép kiểm chứng tối thiểu cho từng giả thuyết.",
        "Evidence: Lưu website-down-triage.md; không thay đổi firewall ngoài lab."
      ],
      "sources": [
        {
          "title": "iproute2 and Linux networking man pages",
          "org": "Linux man-pages",
          "url": "https://man7.org/linux/man-pages/man8/ip.8.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Beginners Intro to Command-line",
          "org": "The Linux Foundation",
          "url": "https://www.youtube.com/watch?v=N850L5Kv4Pg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l2",
      "realWorldContext": "CloudOps tại VN cần debug DNS, port, route và HTTP theo lớp; case website không truy cập được thường sai ở DNS, route, firewall hoặc service listener. Ngày này gắn với artifact: Lưu website-down-triage.md; không thay đổi firewall ngoài lab.",
      "guidedTask": "Mô phỏng app nghe sai port hoặc firewall local chặn port; dùng ss, curl, log để xác định nguyên nhân.",
      "debugTask": "Viết 5 giả thuyết cho “website down” và phép kiểm chứng tối thiểu cho từng giả thuyết.",
      "evidenceTask": "Lưu website-down-triage.md; không thay đổi firewall ngoài lab."
    },
    "reviewQuestionIds": [
      "p1l2q1",
      "p1l2q2",
      "p1l2q3",
      "p1l2q4",
      "p1l2q5",
      "p1l2q6"
    ]
  },
  {
    "id": "d013",
    "dayNumber": 13,
    "week": 2,
    "dayOfWeek": "Sat",
    "phaseId": "p1",
    "title": "OSI model theo luồng request, CIDR, subnet mask, usable host, public/private subnet và route",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào OSI model theo luồng request, CIDR, subnet mask, usable host, public/private subnet và route. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tính 8 bài /24, /26, /27; thiết kế VPC 10.20.0.0/20 với public/private subnet không overlap. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: OSI model theo luồng request, CIDR, subnet mask, usable host, public/private subnet và route.",
        "Lab: Tính 8 bài /24, /26, /27; thiết kế VPC 10.20.0.0/20 với public/private subnet không overlap.",
        "Debug/review: Vẽ sơ đồ VPC bằng Mermaid: client → public tier → private tier → database.",
        "Evidence: Lưu subnetting-exercises.md và vpc-plan.mmd."
      ],
      "sources": [
        {
          "title": "iproute2 and Linux networking man pages",
          "org": "Linux man-pages",
          "url": "https://man7.org/linux/man-pages/man8/ip.8.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Beginners Intro to Command-line",
          "org": "The Linux Foundation",
          "url": "https://www.youtube.com/watch?v=N850L5Kv4Pg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l2",
      "realWorldContext": "CloudOps tại VN cần debug DNS, port, route và HTTP theo lớp; case website không truy cập được thường sai ở DNS, route, firewall hoặc service listener. Ngày này gắn với artifact: Lưu subnetting-exercises.md và vpc-plan.mmd.",
      "guidedTask": "Tính 8 bài /24, /26, /27; thiết kế VPC 10.20.0.0/20 với public/private subnet không overlap.",
      "debugTask": "Vẽ sơ đồ VPC bằng Mermaid: client → public tier → private tier → database.",
      "evidenceTask": "Lưu subnetting-exercises.md và vpc-plan.mmd."
    },
    "reviewQuestionIds": [
      "p1l2q1",
      "p1l2q2",
      "p1l2q3",
      "p1l2q4",
      "p1l2q5",
      "p1l2q6"
    ]
  },
  {
    "id": "d014",
    "dayNumber": 14,
    "week": 2,
    "dayOfWeek": "Sun",
    "phaseId": "p1",
    "title": "Incident lifecycle: detect, assess impact, mitigate, communicate, root cause, prevention",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Incident lifecycle: detect, assess impact, mitigate, communicate, root cause, prevention. Phần lab biến kiến thức thành thao tác kiểm chứng được: Thực hiện tabletop incident 60 phút cho lỗi DNS/port/service; ghi timeline theo phút và lệnh đã chạy. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Incident lifecycle: detect, assess impact, mitigate, communicate, root cause, prevention.",
        "Lab: Thực hiện tabletop incident 60 phút cho lỗi DNS/port/service; ghi timeline theo phút và lệnh đã chạy.",
        "Debug/review: Viết postmortem không đổ lỗi: impact, root cause, contributing factors, action owner/due date.",
        "Evidence: Lưu incident-report-template.md đã điền; commit/push cuối tuần."
      ],
      "sources": [
        {
          "title": "iproute2 and Linux networking man pages",
          "org": "Linux man-pages",
          "url": "https://man7.org/linux/man-pages/man8/ip.8.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Beginners Intro to Command-line",
          "org": "The Linux Foundation",
          "url": "https://www.youtube.com/watch?v=N850L5Kv4Pg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l2",
      "realWorldContext": "CloudOps tại VN cần debug DNS, port, route và HTTP theo lớp; case website không truy cập được thường sai ở DNS, route, firewall hoặc service listener. Ngày này gắn với artifact: Lưu incident-report-template.md đã điền; commit/push cuối tuần.",
      "guidedTask": "Thực hiện tabletop incident 60 phút cho lỗi DNS/port/service; ghi timeline theo phút và lệnh đã chạy.",
      "debugTask": "Viết postmortem không đổ lỗi: impact, root cause, contributing factors, action owner/due date.",
      "evidenceTask": "Lưu incident-report-template.md đã điền; commit/push cuối tuần."
    },
    "reviewQuestionIds": [
      "p1l2q1",
      "p1l2q2",
      "p1l2q3",
      "p1l2q4",
      "p1l2q5",
      "p1l2q6"
    ]
  },
  {
    "id": "d015",
    "dayNumber": 15,
    "week": 3,
    "dayOfWeek": "Mon",
    "phaseId": "p1",
    "title": "Git objects ở mức đủ dùng: init, status, add, commit, log, diff, .gitignore, README tốt",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Git objects ở mức đủ dùng: init, status, add, commit, log, diff, .gitignore, README tốt. Phần lab biến kiến thức thành thao tác kiểm chứng được: Khởi tạo cloud-job-task-labs; tạo cấu trúc task-01 đến task-17; thêm .gitignore cho .env, logs, Terraform state local. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Git objects ở mức đủ dùng: init, status, add, commit, log, diff, .gitignore, README tốt.",
        "Lab: Khởi tạo cloud-job-task-labs; tạo cấu trúc task-01 đến task-17; thêm .gitignore cho .env, logs, Terraform state local.",
        "Debug/review: Tự tạo một commit có scope nhỏ, kiểm tra git show --stat và sửa commit message nếu mơ hồ.",
        "Evidence: Lưu git-basics.md; commit chore: scaffold cloud job task labs."
      ],
      "sources": [
        {
          "title": "Git documentation",
          "org": "Git SCM",
          "url": "https://git-scm.com/doc",
          "type": "doc",
          "verified": true
        },
        {
          "title": "How to create a pull request in 4 min",
          "org": "GitHub",
          "url": "https://www.youtube.com/watch?v=nCKdihvneS0",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l3",
      "realWorldContext": "Team DevOps đánh giá năng lực qua commit nhỏ, PR rõ, secret hygiene và khả năng rollback; đây là bằng chứng vận hành thay vì chỉ nói biết Git. Ngày này gắn với artifact: Lưu git-basics.md; commit chore: scaffold cloud job task labs.",
      "guidedTask": "Khởi tạo cloud-job-task-labs; tạo cấu trúc task-01 đến task-17; thêm .gitignore cho .env, logs, Terraform state local.",
      "debugTask": "Tự tạo một commit có scope nhỏ, kiểm tra git show --stat và sửa commit message nếu mơ hồ.",
      "evidenceTask": "Lưu git-basics.md; commit chore: scaffold cloud job task labs."
    },
    "reviewQuestionIds": [
      "p1l3q1",
      "p1l3q2",
      "p1l3q3",
      "p1l3q4",
      "p1l3q5",
      "p1l3q6"
    ]
  },
  {
    "id": "d016",
    "dayNumber": 16,
    "week": 3,
    "dayOfWeek": "Tue",
    "phaseId": "p1",
    "title": "Branch, merge, rebase khái niệm, conflict, pull request và review checklist",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Branch, merge, rebase khái niệm, conflict, pull request và review checklist. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tạo branch feat/health-check; sửa cùng một dòng trên hai branch để tạo conflict rồi resolve có chủ đích. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Branch, merge, rebase khái niệm, conflict, pull request và review checklist.",
        "Lab: Tạo branch feat/health-check; sửa cùng một dòng trên hai branch để tạo conflict rồi resolve có chủ đích.",
        "Debug/review: Viết checklist PR: mục tiêu, test, secret scan, rollback, docs; mô phỏng review chính mình.",
        "Evidence: Lưu pr-checklist.md; chụp git log --graph --oneline."
      ],
      "sources": [
        {
          "title": "Git documentation",
          "org": "Git SCM",
          "url": "https://git-scm.com/doc",
          "type": "doc",
          "verified": true
        },
        {
          "title": "How to create a pull request in 4 min",
          "org": "GitHub",
          "url": "https://www.youtube.com/watch?v=nCKdihvneS0",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l3",
      "realWorldContext": "Team DevOps đánh giá năng lực qua commit nhỏ, PR rõ, secret hygiene và khả năng rollback; đây là bằng chứng vận hành thay vì chỉ nói biết Git. Ngày này gắn với artifact: Lưu pr-checklist.md; chụp git log --graph --oneline.",
      "guidedTask": "Tạo branch feat/health-check; sửa cùng một dòng trên hai branch để tạo conflict rồi resolve có chủ đích.",
      "debugTask": "Viết checklist PR: mục tiêu, test, secret scan, rollback, docs; mô phỏng review chính mình.",
      "evidenceTask": "Lưu pr-checklist.md; chụp git log --graph --oneline."
    },
    "reviewQuestionIds": [
      "p1l3q1",
      "p1l3q2",
      "p1l3q3",
      "p1l3q4",
      "p1l3q5",
      "p1l3q6"
    ]
  },
  {
    "id": "d017",
    "dayNumber": 17,
    "week": 3,
    "dayOfWeek": "Wed",
    "phaseId": "p1",
    "title": "Remote, tag/release, semantic commit, GitHub Actions anatomy: trigger, job, step, runner, artifact",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Remote, tag/release, semantic commit, GitHub Actions anatomy: trigger, job, step, runner, artifact. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tạo workflow chỉ chạy bash -n/Python compile khi push; dùng action checkout; kiểm tra YAML bằng đọc/syntax. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Remote, tag/release, semantic commit, GitHub Actions anatomy: trigger, job, step, runner, artifact.",
        "Lab: Tạo workflow chỉ chạy bash -n/Python compile khi push; dùng action checkout; kiểm tra YAML bằng đọc/syntax.",
        "Debug/review: Tạo tag v0.1.0 cho mốc tuần 2 và viết release note ngắn.",
        "Evidence: Lưu .github/workflows/validate.yml và release-notes.md."
      ],
      "sources": [
        {
          "title": "Git documentation",
          "org": "Git SCM",
          "url": "https://git-scm.com/doc",
          "type": "doc",
          "verified": true
        },
        {
          "title": "How to create a pull request in 4 min",
          "org": "GitHub",
          "url": "https://www.youtube.com/watch?v=nCKdihvneS0",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l3",
      "realWorldContext": "Team DevOps đánh giá năng lực qua commit nhỏ, PR rõ, secret hygiene và khả năng rollback; đây là bằng chứng vận hành thay vì chỉ nói biết Git. Ngày này gắn với artifact: Lưu .github/workflows/validate.yml và release-notes.md.",
      "guidedTask": "Tạo workflow chỉ chạy bash -n/Python compile khi push; dùng action checkout; kiểm tra YAML bằng đọc/syntax.",
      "debugTask": "Tạo tag v0.1.0 cho mốc tuần 2 và viết release note ngắn.",
      "evidenceTask": "Lưu .github/workflows/validate.yml và release-notes.md."
    },
    "reviewQuestionIds": [
      "p1l3q1",
      "p1l3q2",
      "p1l3q3",
      "p1l3q4",
      "p1l3q5",
      "p1l3q6"
    ]
  },
  {
    "id": "d018",
    "dayNumber": 18,
    "week": 3,
    "dayOfWeek": "Thu",
    "phaseId": "p1",
    "title": "Bash health check: functions, timeout, curl, disk threshold, process/service check, exit codes",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Bash health check: functions, timeout, curl, disk threshold, process/service check, exit codes. Phần lab biến kiến thức thành thao tác kiểm chứng được: Viết health-check.sh kiểm tra disk, HTTP /health, service/port; output PASS/WARN/FAIL và mã thoát khác nhau. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Bash health check: functions, timeout, curl, disk threshold, process/service check, exit codes.",
        "Lab: Viết health-check.sh kiểm tra disk, HTTP /health, service/port; output PASS/WARN/FAIL và mã thoát khác nhau.",
        "Debug/review: Tạo fake failure bằng URL/threshold sai; test 4 case và sửa script chỉ trả PASS khi tất cả điều kiện đạt.",
        "Evidence: Lưu script, tests.md, README; commit feature."
      ],
      "sources": [
        {
          "title": "Git documentation",
          "org": "Git SCM",
          "url": "https://git-scm.com/doc",
          "type": "doc",
          "verified": true
        },
        {
          "title": "How to create a pull request in 4 min",
          "org": "GitHub",
          "url": "https://www.youtube.com/watch?v=nCKdihvneS0",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l3",
      "realWorldContext": "Team DevOps đánh giá năng lực qua commit nhỏ, PR rõ, secret hygiene và khả năng rollback; đây là bằng chứng vận hành thay vì chỉ nói biết Git. Ngày này gắn với artifact: Lưu script, tests.md, README; commit feature.",
      "guidedTask": "Viết health-check.sh kiểm tra disk, HTTP /health, service/port; output PASS/WARN/FAIL và mã thoát khác nhau.",
      "debugTask": "Tạo fake failure bằng URL/threshold sai; test 4 case và sửa script chỉ trả PASS khi tất cả điều kiện đạt.",
      "evidenceTask": "Lưu script, tests.md, README; commit feature."
    },
    "reviewQuestionIds": [
      "p1l3q1",
      "p1l3q2",
      "p1l3q3",
      "p1l3q4",
      "p1l3q5",
      "p1l3q6"
    ]
  },
  {
    "id": "d019",
    "dayNumber": 19,
    "week": 3,
    "dayOfWeek": "Fri",
    "phaseId": "p1",
    "title": "Python: virtual environment, variables, list/dict, file I/O, JSON, exception handling, logging",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Python: virtual environment, variables, list/dict, file I/O, JSON, exception handling, logging. Phần lab biến kiến thức thành thao tác kiểm chứng được: Viết parse_health_report.py đọc output JSON giả lập và tạo summary theo severity. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Python: virtual environment, variables, list/dict, file I/O, JSON, exception handling, logging.",
        "Lab: Viết parse_health_report.py đọc output JSON giả lập và tạo summary theo severity.",
        "Debug/review: Cố ý đưa JSON lỗi/missing key; bắt lỗi, in message hữu ích và return non-zero.",
        "Evidence: Lưu script, sample input/output và error-handling note."
      ],
      "sources": [
        {
          "title": "Git documentation",
          "org": "Git SCM",
          "url": "https://git-scm.com/doc",
          "type": "doc",
          "verified": true
        },
        {
          "title": "How to create a pull request in 4 min",
          "org": "GitHub",
          "url": "https://www.youtube.com/watch?v=nCKdihvneS0",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l3",
      "realWorldContext": "Team DevOps đánh giá năng lực qua commit nhỏ, PR rõ, secret hygiene và khả năng rollback; đây là bằng chứng vận hành thay vì chỉ nói biết Git. Ngày này gắn với artifact: Lưu script, sample input/output và error-handling note.",
      "guidedTask": "Viết parse_health_report.py đọc output JSON giả lập và tạo summary theo severity.",
      "debugTask": "Cố ý đưa JSON lỗi/missing key; bắt lỗi, in message hữu ích và return non-zero.",
      "evidenceTask": "Lưu script, sample input/output và error-handling note."
    },
    "reviewQuestionIds": [
      "p1l3q1",
      "p1l3q2",
      "p1l3q3",
      "p1l3q4",
      "p1l3q5",
      "p1l3q6"
    ]
  },
  {
    "id": "d020",
    "dayNumber": 20,
    "week": 3,
    "dayOfWeek": "Sat",
    "phaseId": "p1",
    "title": "Python requests, subprocess, argparse; khi nào không parse shell output; boto3 concept không cần key thật",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Python requests, subprocess, argparse; khi nào không parse shell output; boto3 concept không cần key thật. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tạo Python wrapper gọi health-check và request endpoint public/mock; export report JSON có timestamp. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Python requests, subprocess, argparse; khi nào không parse shell output; boto3 concept không cần key thật.",
        "Lab: Tạo Python wrapper gọi health-check và request endpoint public/mock; export report JSON có timestamp.",
        "Debug/review: Thêm --url và --output; chạy python -m py_compile và kiểm tra output schema.",
        "Evidence: Lưu automation-report.json, usage examples, dependency note."
      ],
      "sources": [
        {
          "title": "Git documentation",
          "org": "Git SCM",
          "url": "https://git-scm.com/doc",
          "type": "doc",
          "verified": true
        },
        {
          "title": "How to create a pull request in 4 min",
          "org": "GitHub",
          "url": "https://www.youtube.com/watch?v=nCKdihvneS0",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l3",
      "realWorldContext": "Team DevOps đánh giá năng lực qua commit nhỏ, PR rõ, secret hygiene và khả năng rollback; đây là bằng chứng vận hành thay vì chỉ nói biết Git. Ngày này gắn với artifact: Lưu automation-report.json, usage examples, dependency note.",
      "guidedTask": "Tạo Python wrapper gọi health-check và request endpoint public/mock; export report JSON có timestamp.",
      "debugTask": "Thêm --url và --output; chạy python -m py_compile và kiểm tra output schema.",
      "evidenceTask": "Lưu automation-report.json, usage examples, dependency note."
    },
    "reviewQuestionIds": [
      "p1l3q1",
      "p1l3q2",
      "p1l3q3",
      "p1l3q4",
      "p1l3q5",
      "p1l3q6"
    ]
  },
  {
    "id": "d021",
    "dayNumber": 21,
    "week": 3,
    "dayOfWeek": "Sun",
    "phaseId": "p1",
    "title": "Ôn tuần qua một ticket end-to-end: triage → script → evidence → Git review",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Ôn tuần qua một ticket end-to-end: triage → script → evidence → Git review. Phần lab biến kiến thức thành thao tác kiểm chứng được: Từ folder trống, dựng lại health check mini trong 90 phút; tạo issue giả, branch, PR description và merge local. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Ôn tuần qua một ticket end-to-end: triage → script → evidence → Git review.",
        "Lab: Từ folder trống, dựng lại health check mini trong 90 phút; tạo issue giả, branch, PR description và merge local.",
        "Debug/review: Đọc lại diff với góc nhìn reviewer: liệu người khác chạy được, hiểu failure và rollback không?.",
        "Evidence: Lưu week03-retro.md; push repo khi remote đã được cấu hình."
      ],
      "sources": [
        {
          "title": "Git documentation",
          "org": "Git SCM",
          "url": "https://git-scm.com/doc",
          "type": "doc",
          "verified": true
        },
        {
          "title": "How to create a pull request in 4 min",
          "org": "GitHub",
          "url": "https://www.youtube.com/watch?v=nCKdihvneS0",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l3",
      "realWorldContext": "Team DevOps đánh giá năng lực qua commit nhỏ, PR rõ, secret hygiene và khả năng rollback; đây là bằng chứng vận hành thay vì chỉ nói biết Git. Ngày này gắn với artifact: Lưu week03-retro.md; push repo khi remote đã được cấu hình.",
      "guidedTask": "Từ folder trống, dựng lại health check mini trong 90 phút; tạo issue giả, branch, PR description và merge local.",
      "debugTask": "Đọc lại diff với góc nhìn reviewer: liệu người khác chạy được, hiểu failure và rollback không?.",
      "evidenceTask": "Lưu week03-retro.md; push repo khi remote đã được cấu hình."
    },
    "reviewQuestionIds": [
      "p1l3q1",
      "p1l3q2",
      "p1l3q3",
      "p1l3q4",
      "p1l3q5",
      "p1l3q6"
    ]
  },
  {
    "id": "d022",
    "dayNumber": 22,
    "week": 4,
    "dayOfWeek": "Mon",
    "phaseId": "p1",
    "title": "Container vs VM, image/container, registry, namespace/cgroup ở mức vận hành, lifecycle Docker",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Container vs VM, image/container, registry, namespace/cgroup ở mức vận hành, lifecycle Docker. Phần lab biến kiến thức thành thao tác kiểm chứng được: Chạy hello-world và Nginx; quan sát image/container bằng docker images, ps -a, inspect. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Container vs VM, image/container, registry, namespace/cgroup ở mức vận hành, lifecycle Docker.",
        "Lab: Chạy hello-world và Nginx; quan sát image/container bằng docker images, ps -a, inspect.",
        "Debug/review: Giải thích bằng 5 câu vì sao image immutable nhưng container writable layer không phải nơi lưu data.",
        "Evidence: Lưu docker-concepts.md kèm output lệnh."
      ],
      "sources": [
        {
          "title": "Docker documentation",
          "org": "Docker",
          "url": "https://docs.docker.com/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Docker 101: Introduction to Docker and Containers",
          "org": "Docker",
          "url": "https://www.youtube.com/watch?v=kwsJIH5TGIg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l4",
      "realWorldContext": "Container crash, port sai và image chứa secret là lỗi production phổ biến; lab giúp đọc logs/inspect trước khi restart hoặc rebuild. Ngày này gắn với artifact: Lưu docker-concepts.md kèm output lệnh.",
      "guidedTask": "Chạy hello-world và Nginx; quan sát image/container bằng docker images, ps -a, inspect.",
      "debugTask": "Giải thích bằng 5 câu vì sao image immutable nhưng container writable layer không phải nơi lưu data.",
      "evidenceTask": "Lưu docker-concepts.md kèm output lệnh."
    },
    "reviewQuestionIds": [
      "p1l4q1",
      "p1l4q2",
      "p1l4q3",
      "p1l4q4",
      "p1l4q5",
      "p1l4q6"
    ]
  },
  {
    "id": "d023",
    "dayNumber": 23,
    "week": 4,
    "dayOfWeek": "Tue",
    "phaseId": "p1",
    "title": "Docker CLI: run, exec, logs, stop/rm, volume, bridge network, port mapping",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Docker CLI: run, exec, logs, stop/rm, volume, bridge network, port mapping. Phần lab biến kiến thức thành thao tác kiểm chứng được: Chạy Nginx với named volume và custom network; exec đọc file; curl qua host port. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Docker CLI: run, exec, logs, stop/rm, volume, bridge network, port mapping.",
        "Lab: Chạy Nginx với named volume và custom network; exec đọc file; curl qua host port.",
        "Debug/review: Xóa/recreate container và chứng minh data volume còn tồn tại; dọn container/image lab.",
        "Evidence: Lưu docker-lifecycle-runbook.md + teardown commands."
      ],
      "sources": [
        {
          "title": "Docker documentation",
          "org": "Docker",
          "url": "https://docs.docker.com/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Docker 101: Introduction to Docker and Containers",
          "org": "Docker",
          "url": "https://www.youtube.com/watch?v=kwsJIH5TGIg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l4",
      "realWorldContext": "Container crash, port sai và image chứa secret là lỗi production phổ biến; lab giúp đọc logs/inspect trước khi restart hoặc rebuild. Ngày này gắn với artifact: Lưu docker-lifecycle-runbook.md + teardown commands.",
      "guidedTask": "Chạy Nginx với named volume và custom network; exec đọc file; curl qua host port.",
      "debugTask": "Xóa/recreate container và chứng minh data volume còn tồn tại; dọn container/image lab.",
      "evidenceTask": "Lưu docker-lifecycle-runbook.md + teardown commands."
    },
    "reviewQuestionIds": [
      "p1l4q1",
      "p1l4q2",
      "p1l4q3",
      "p1l4q4",
      "p1l4q5",
      "p1l4q6"
    ]
  },
  {
    "id": "d024",
    "dayNumber": 24,
    "week": 4,
    "dayOfWeek": "Wed",
    "phaseId": "p1",
    "title": "Dockerfile: FROM, WORKDIR, COPY, RUN, ENV, EXPOSE, CMD vs ENTRYPOINT",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Dockerfile: FROM, WORKDIR, COPY, RUN, ENV, EXPOSE, CMD vs ENTRYPOINT. Phần lab biến kiến thức thành thao tác kiểm chứng được: Containerize app Python/Node hello-health; build tag riêng; chạy /health và xem log. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Dockerfile: FROM, WORKDIR, COPY, RUN, ENV, EXPOSE, CMD vs ENTRYPOINT.",
        "Lab: Containerize app Python/Node hello-health; build tag riêng; chạy /health và xem log.",
        "Debug/review: Sửa sai thứ tự COPY/CMD hoặc thiếu dependency; rebuild rồi so sánh behavior.",
        "Evidence: Lưu Dockerfile, .dockerignore, README run command."
      ],
      "sources": [
        {
          "title": "Docker documentation",
          "org": "Docker",
          "url": "https://docs.docker.com/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Docker 101: Introduction to Docker and Containers",
          "org": "Docker",
          "url": "https://www.youtube.com/watch?v=kwsJIH5TGIg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l4",
      "realWorldContext": "Container crash, port sai và image chứa secret là lỗi production phổ biến; lab giúp đọc logs/inspect trước khi restart hoặc rebuild. Ngày này gắn với artifact: Lưu Dockerfile, .dockerignore, README run command.",
      "guidedTask": "Containerize app Python/Node hello-health; build tag riêng; chạy /health và xem log.",
      "debugTask": "Sửa sai thứ tự COPY/CMD hoặc thiếu dependency; rebuild rồi so sánh behavior.",
      "evidenceTask": "Lưu Dockerfile, .dockerignore, README run command."
    },
    "reviewQuestionIds": [
      "p1l4q1",
      "p1l4q2",
      "p1l4q3",
      "p1l4q4",
      "p1l4q5",
      "p1l4q6"
    ]
  },
  {
    "id": "d025",
    "dayNumber": 25,
    "week": 4,
    "dayOfWeek": "Thu",
    "phaseId": "p1",
    "title": "Layer cache, multi-stage build, pin base image, non-root user, healthcheck và image size trade-off",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Layer cache, multi-stage build, pin base image, non-root user, healthcheck và image size trade-off. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tối ưu Dockerfile hôm qua: cache dependency, .dockerignore, user non-root; kiểm tra docker history. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Layer cache, multi-stage build, pin base image, non-root user, healthcheck và image size trade-off.",
        "Lab: Tối ưu Dockerfile hôm qua: cache dependency, .dockerignore, user non-root; kiểm tra docker history.",
        "Debug/review: So sánh image trước/sau và giải thích mỗi tối ưu có ảnh hưởng gì đến build/security.",
        "Evidence: Lưu optimization-notes.md và tag v0.2.0."
      ],
      "sources": [
        {
          "title": "Docker documentation",
          "org": "Docker",
          "url": "https://docs.docker.com/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Docker 101: Introduction to Docker and Containers",
          "org": "Docker",
          "url": "https://www.youtube.com/watch?v=kwsJIH5TGIg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l4",
      "realWorldContext": "Container crash, port sai và image chứa secret là lỗi production phổ biến; lab giúp đọc logs/inspect trước khi restart hoặc rebuild. Ngày này gắn với artifact: Lưu optimization-notes.md và tag v0.2.0.",
      "guidedTask": "Tối ưu Dockerfile hôm qua: cache dependency, .dockerignore, user non-root; kiểm tra docker history.",
      "debugTask": "So sánh image trước/sau và giải thích mỗi tối ưu có ảnh hưởng gì đến build/security.",
      "evidenceTask": "Lưu optimization-notes.md và tag v0.2.0."
    },
    "reviewQuestionIds": [
      "p1l4q1",
      "p1l4q2",
      "p1l4q3",
      "p1l4q4",
      "p1l4q5",
      "p1l4q6"
    ]
  },
  {
    "id": "d026",
    "dayNumber": 26,
    "week": 4,
    "dayOfWeek": "Fri",
    "phaseId": "p1",
    "title": "Docker Compose: services, environment, depends_on, networks, volumes và readiness khác startup order",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Docker Compose: services, environment, depends_on, networks, volumes và readiness khác startup order. Phần lab biến kiến thức thành thao tác kiểm chứng được: Dựng app + PostgreSQL/Redis mock bằng docker compose; dùng healthcheck hoặc retry để app chờ dependency. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Docker Compose: services, environment, depends_on, networks, volumes và readiness khác startup order.",
        "Lab: Dựng app + PostgreSQL/Redis mock bằng docker compose; dùng healthcheck hoặc retry để app chờ dependency.",
        "Debug/review: Tắt database, đọc log app, phục hồi service; không xóa volume trước khi export/backup mẫu.",
        "Evidence: Lưu compose.yaml, .env.example, compose-runbook.md."
      ],
      "sources": [
        {
          "title": "Docker documentation",
          "org": "Docker",
          "url": "https://docs.docker.com/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Docker 101: Introduction to Docker and Containers",
          "org": "Docker",
          "url": "https://www.youtube.com/watch?v=kwsJIH5TGIg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l4",
      "realWorldContext": "Container crash, port sai và image chứa secret là lỗi production phổ biến; lab giúp đọc logs/inspect trước khi restart hoặc rebuild. Ngày này gắn với artifact: Lưu compose.yaml, .env.example, compose-runbook.md.",
      "guidedTask": "Dựng app + PostgreSQL/Redis mock bằng docker compose; dùng healthcheck hoặc retry để app chờ dependency.",
      "debugTask": "Tắt database, đọc log app, phục hồi service; không xóa volume trước khi export/backup mẫu.",
      "evidenceTask": "Lưu compose.yaml, .env.example, compose-runbook.md."
    },
    "reviewQuestionIds": [
      "p1l4q1",
      "p1l4q2",
      "p1l4q3",
      "p1l4q4",
      "p1l4q5",
      "p1l4q6"
    ]
  },
  {
    "id": "d027",
    "dayNumber": 27,
    "week": 4,
    "dayOfWeek": "Sat",
    "phaseId": "p1",
    "title": "Container troubleshooting/security: log, inspect, exit code, resource limit, vuln scanning và secret hygiene",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Container troubleshooting/security: log, inspect, exit code, resource limit, vuln scanning và secret hygiene. Phần lab biến kiến thức thành thao tác kiểm chứng được: Mô phỏng container crash do env thiếu; dùng docker logs, inspect, compose config để fix; chạy Trivy nếu có. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Container troubleshooting/security: log, inspect, exit code, resource limit, vuln scanning và secret hygiene.",
        "Lab: Mô phỏng container crash do env thiếu; dùng docker logs, inspect, compose config để fix; chạy Trivy nếu có.",
        "Debug/review: Viết checklist release container: tag, scan, non-root, healthcheck, no secret, rollback image.",
        "Evidence: Lưu container-triage.md và scan result/safe manual review."
      ],
      "sources": [
        {
          "title": "Docker documentation",
          "org": "Docker",
          "url": "https://docs.docker.com/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Docker 101: Introduction to Docker and Containers",
          "org": "Docker",
          "url": "https://www.youtube.com/watch?v=kwsJIH5TGIg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l4",
      "realWorldContext": "Container crash, port sai và image chứa secret là lỗi production phổ biến; lab giúp đọc logs/inspect trước khi restart hoặc rebuild. Ngày này gắn với artifact: Lưu container-triage.md và scan result/safe manual review.",
      "guidedTask": "Mô phỏng container crash do env thiếu; dùng docker logs, inspect, compose config để fix; chạy Trivy nếu có.",
      "debugTask": "Viết checklist release container: tag, scan, non-root, healthcheck, no secret, rollback image.",
      "evidenceTask": "Lưu container-triage.md và scan result/safe manual review."
    },
    "reviewQuestionIds": [
      "p1l4q1",
      "p1l4q2",
      "p1l4q3",
      "p1l4q4",
      "p1l4q5",
      "p1l4q6"
    ]
  },
  {
    "id": "d028",
    "dayNumber": 28,
    "week": 4,
    "dayOfWeek": "Sun",
    "phaseId": "p1",
    "title": "Checkpoint tháng 1: biến Linux/Git/Docker thành một deploy reproducible",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Checkpoint tháng 1: biến Linux/Git/Docker thành một deploy reproducible. Phần lab biến kiến thức thành thao tác kiểm chứng được: Từ clone sạch: build, compose up, curl health, chạy health script, simulate fail rồi recover. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Checkpoint tháng 1: biến Linux/Git/Docker thành một deploy reproducible.",
        "Lab: Từ clone sạch: build, compose up, curl health, chạy health script, simulate fail rồi recover.",
        "Debug/review: Viết README theo 5 phần: architecture, prerequisites, run, verify, teardown/troubleshoot.",
        "Evidence: Tag milestone month-01; week04-retro.md; commit/push."
      ],
      "sources": [
        {
          "title": "Docker documentation",
          "org": "Docker",
          "url": "https://docs.docker.com/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Docker 101: Introduction to Docker and Containers",
          "org": "Docker",
          "url": "https://www.youtube.com/watch?v=kwsJIH5TGIg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p1l4",
      "realWorldContext": "Container crash, port sai và image chứa secret là lỗi production phổ biến; lab giúp đọc logs/inspect trước khi restart hoặc rebuild. Ngày này gắn với artifact: Tag milestone month-01; week04-retro.md; commit/push.",
      "guidedTask": "Từ clone sạch: build, compose up, curl health, chạy health script, simulate fail rồi recover.",
      "debugTask": "Viết README theo 5 phần: architecture, prerequisites, run, verify, teardown/troubleshoot.",
      "evidenceTask": "Tag milestone month-01; week04-retro.md; commit/push."
    },
    "reviewQuestionIds": [
      "p1l4q1",
      "p1l4q2",
      "p1l4q3",
      "p1l4q4",
      "p1l4q5",
      "p1l4q6"
    ]
  },
  {
    "id": "d029",
    "dayNumber": 29,
    "week": 5,
    "dayOfWeek": "Mon",
    "phaseId": "p2",
    "title": "AWS shared responsibility, account structure, root vs IAM role/user, MFA, billing and tagging",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào AWS shared responsibility, account structure, root vs IAM role/user, MFA, billing and tagging. Phần lab biến kiến thức thành thao tác kiểm chứng được: Thiết lập/kiểm tra MFA root, Budget $5/$20, billing alert và tag Project=cloud-lab; nếu chưa có account, làm checklist/sandbox plan. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: AWS shared responsibility, account structure, root vs IAM role/user, MFA, billing and tagging.",
        "Lab: Thiết lập/kiểm tra MFA root, Budget $5/$20, billing alert và tag Project=cloud-lab; nếu chưa có account, làm checklist/sandbox plan.",
        "Debug/review: Viết aws-account-baseline.md nêu ai được dùng root, nơi lưu billing alert, và tiêu chí dừng lab.",
        "Evidence: Lưu screenshot/verification không lộ account ID; checklist hoàn thành."
      ],
      "sources": [
        {
          "title": "AWS IAM User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l1",
      "realWorldContext": "AWS identity là điểm rủi ro cao nhất: root, IAM, policy rộng và credential dài hạn có thể gây sự cố bảo mật hoặc chi phí. Ngày này gắn với artifact: Lưu screenshot/verification không lộ account ID; checklist hoàn thành.",
      "guidedTask": "Thiết lập/kiểm tra MFA root, Budget $5/$20, billing alert và tag Project=cloud-lab; nếu chưa có account, làm checklist/sandbox plan.",
      "debugTask": "Viết aws-account-baseline.md nêu ai được dùng root, nơi lưu billing alert, và tiêu chí dừng lab.",
      "evidenceTask": "Lưu screenshot/verification không lộ account ID; checklist hoàn thành."
    },
    "reviewQuestionIds": [
      "p2l1q1",
      "p2l1q2",
      "p2l1q3",
      "p2l1q4",
      "p2l1q5",
      "p2l1q6"
    ]
  },
  {
    "id": "d030",
    "dayNumber": 30,
    "week": 5,
    "dayOfWeek": "Tue",
    "phaseId": "p2",
    "title": "IAM policy evaluation, user/group/role, managed vs inline policy, least privilege và deny",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào IAM policy evaluation, user/group/role, managed vs inline policy, least privilege và deny. Phần lab biến kiến thức thành thao tác kiểm chứng được: Viết policy JSON chỉ s3:ListBucket/GetObject cho bucket lab; dùng IAM Policy Simulator hoặc đọc policy logic. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: IAM policy evaluation, user/group/role, managed vs inline policy, least privilege và deny.",
        "Lab: Viết policy JSON chỉ s3:ListBucket/GetObject cho bucket lab; dùng IAM Policy Simulator hoặc đọc policy logic.",
        "Debug/review: So sánh policy rộng s3:* với policy hẹp; ghi 3 rủi ro permission quá mức.",
        "Evidence: Lưu iam-s3-readonly-policy.json và rationale."
      ],
      "sources": [
        {
          "title": "AWS IAM User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l1",
      "realWorldContext": "AWS identity là điểm rủi ro cao nhất: root, IAM, policy rộng và credential dài hạn có thể gây sự cố bảo mật hoặc chi phí. Ngày này gắn với artifact: Lưu iam-s3-readonly-policy.json và rationale.",
      "guidedTask": "Viết policy JSON chỉ s3:ListBucket/GetObject cho bucket lab; dùng IAM Policy Simulator hoặc đọc policy logic.",
      "debugTask": "So sánh policy rộng s3:* với policy hẹp; ghi 3 rủi ro permission quá mức.",
      "evidenceTask": "Lưu iam-s3-readonly-policy.json và rationale."
    },
    "reviewQuestionIds": [
      "p2l1q1",
      "p2l1q2",
      "p2l1q3",
      "p2l1q4",
      "p2l1q5",
      "p2l1q6"
    ]
  },
  {
    "id": "d031",
    "dayNumber": 31,
    "week": 5,
    "dayOfWeek": "Wed",
    "phaseId": "p2",
    "title": "AWS CLI profile, region, STS identity, credential chain, role assumption và không dùng access key dài hạn",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào AWS CLI profile, region, STS identity, credential chain, role assumption và không dùng access key dài hạn. Phần lab biến kiến thức thành thao tác kiểm chứng được: Cấu hình profile lab an toàn nếu được phép; chạy aws sts get-caller-identity, aws configure list; nếu offline, dùng output mock đã gắn nhãn. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: AWS CLI profile, region, STS identity, credential chain, role assumption và không dùng access key dài hạn.",
        "Lab: Cấu hình profile lab an toàn nếu được phép; chạy aws sts get-caller-identity, aws configure list; nếu offline, dùng output mock đã gắn nhãn.",
        "Debug/review: Viết command inventory read-only cho EC2/S3 và cách xóa/rotate credential khi nghi lộ.",
        "Evidence: Lưu aws-cli-basics.md; tuyệt đối không lưu secret hoặc output token."
      ],
      "sources": [
        {
          "title": "AWS IAM User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l1",
      "realWorldContext": "AWS identity là điểm rủi ro cao nhất: root, IAM, policy rộng và credential dài hạn có thể gây sự cố bảo mật hoặc chi phí. Ngày này gắn với artifact: Lưu aws-cli-basics.md; tuyệt đối không lưu secret hoặc output token.",
      "guidedTask": "Cấu hình profile lab an toàn nếu được phép; chạy aws sts get-caller-identity, aws configure list; nếu offline, dùng output mock đã gắn nhãn.",
      "debugTask": "Viết command inventory read-only cho EC2/S3 và cách xóa/rotate credential khi nghi lộ.",
      "evidenceTask": "Lưu aws-cli-basics.md; tuyệt đối không lưu secret hoặc output token."
    },
    "reviewQuestionIds": [
      "p2l1q1",
      "p2l1q2",
      "p2l1q3",
      "p2l1q4",
      "p2l1q5",
      "p2l1q6"
    ]
  },
  {
    "id": "d032",
    "dayNumber": 32,
    "week": 5,
    "dayOfWeek": "Thu",
    "phaseId": "p2",
    "title": "VPC, CIDR, route table, public/private subnet, availability zone và network boundary",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào VPC, CIDR, route table, public/private subnet, availability zone và network boundary. Phần lab biến kiến thức thành thao tác kiểm chứng được: Chia 10.20.0.0/20 thành 2 public/2 private subnet; tính CIDR, host range và tránh overlap. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: VPC, CIDR, route table, public/private subnet, availability zone và network boundary.",
        "Lab: Chia 10.20.0.0/20 thành 2 public/2 private subnet; tính CIDR, host range và tránh overlap.",
        "Debug/review: Vẽ Mermaid architecture gồm IGW, NAT placeholder, app, DB; đánh dấu resource có thể phát sinh phí.",
        "Evidence: Lưu vpc-address-plan.md và diagram."
      ],
      "sources": [
        {
          "title": "AWS IAM User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l1",
      "realWorldContext": "AWS identity là điểm rủi ro cao nhất: root, IAM, policy rộng và credential dài hạn có thể gây sự cố bảo mật hoặc chi phí. Ngày này gắn với artifact: Lưu vpc-address-plan.md và diagram.",
      "guidedTask": "Chia 10.20.0.0/20 thành 2 public/2 private subnet; tính CIDR, host range và tránh overlap.",
      "debugTask": "Vẽ Mermaid architecture gồm IGW, NAT placeholder, app, DB; đánh dấu resource có thể phát sinh phí.",
      "evidenceTask": "Lưu vpc-address-plan.md và diagram."
    },
    "reviewQuestionIds": [
      "p2l1q1",
      "p2l1q2",
      "p2l1q3",
      "p2l1q4",
      "p2l1q5",
      "p2l1q6"
    ]
  },
  {
    "id": "d033",
    "dayNumber": 33,
    "week": 5,
    "dayOfWeek": "Fri",
    "phaseId": "p2",
    "title": "IGW, NAT Gateway trade-off, Security Group stateful, NACL stateless, route flow",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào IGW, NAT Gateway trade-off, Security Group stateful, NACL stateless, route flow. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tạo rule matrix: ALB 443 from Internet; app only from ALB; DB only from app. Không mở 0.0.0.0/0 cho SSH. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: IGW, NAT Gateway trade-off, Security Group stateful, NACL stateless, route flow.",
        "Lab: Tạo rule matrix: ALB 443 from Internet; app only from ALB; DB only from app. Không mở 0.0.0.0/0 cho SSH.",
        "Debug/review: Mô phỏng một EC2 private không ra Internet: kiểm tra route, NAT, SG/NACL theo đúng thứ tự.",
        "Evidence: Lưu network-security-matrix.md và triage checklist."
      ],
      "sources": [
        {
          "title": "AWS IAM User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l1",
      "realWorldContext": "AWS identity là điểm rủi ro cao nhất: root, IAM, policy rộng và credential dài hạn có thể gây sự cố bảo mật hoặc chi phí. Ngày này gắn với artifact: Lưu network-security-matrix.md và triage checklist.",
      "guidedTask": "Tạo rule matrix: ALB 443 from Internet; app only from ALB; DB only from app. Không mở 0.0.0.0/0 cho SSH.",
      "debugTask": "Mô phỏng một EC2 private không ra Internet: kiểm tra route, NAT, SG/NACL theo đúng thứ tự.",
      "evidenceTask": "Lưu network-security-matrix.md và triage checklist."
    },
    "reviewQuestionIds": [
      "p2l1q1",
      "p2l1q2",
      "p2l1q3",
      "p2l1q4",
      "p2l1q5",
      "p2l1q6"
    ]
  },
  {
    "id": "d034",
    "dayNumber": 34,
    "week": 5,
    "dayOfWeek": "Sat",
    "phaseId": "p2",
    "title": "Build VPC bằng Console/CLI theo checklist; tagging, idempotency concept và teardown order",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Build VPC bằng Console/CLI theo checklist; tagging, idempotency concept và teardown order. Phần lab biến kiến thức thành thao tác kiểm chứng được: Nếu dùng AWS: tạo VPC/subnet/route/SG tối thiểu với tag; nếu không: làm dry-run CLI/diagram và peer review plan. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Build VPC bằng Console/CLI theo checklist; tagging, idempotency concept và teardown order.",
        "Lab: Nếu dùng AWS: tạo VPC/subnet/route/SG tối thiểu với tag; nếu không: làm dry-run CLI/diagram và peer review plan.",
        "Debug/review: Ghi resource IDs hoặc placeholder; lập danh sách “created today” và lệnh/console path để xóa.",
        "Evidence: Lưu vpc-build-runbook.md, teardown.md, screenshots."
      ],
      "sources": [
        {
          "title": "AWS IAM User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l1",
      "realWorldContext": "AWS identity là điểm rủi ro cao nhất: root, IAM, policy rộng và credential dài hạn có thể gây sự cố bảo mật hoặc chi phí. Ngày này gắn với artifact: Lưu vpc-build-runbook.md, teardown.md, screenshots.",
      "guidedTask": "Nếu dùng AWS: tạo VPC/subnet/route/SG tối thiểu với tag; nếu không: làm dry-run CLI/diagram và peer review plan.",
      "debugTask": "Ghi resource IDs hoặc placeholder; lập danh sách “created today” và lệnh/console path để xóa.",
      "evidenceTask": "Lưu vpc-build-runbook.md, teardown.md, screenshots."
    },
    "reviewQuestionIds": [
      "p2l1q1",
      "p2l1q2",
      "p2l1q3",
      "p2l1q4",
      "p2l1q5",
      "p2l1q6"
    ]
  },
  {
    "id": "d035",
    "dayNumber": 35,
    "week": 5,
    "dayOfWeek": "Sun",
    "phaseId": "p2",
    "title": "Review identity + network boundary qua architecture walkthrough",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Review identity + network boundary qua architecture walkthrough. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tự giải thích luồng browser → app → DB và ai có quyền gọi API AWS; rà policy/SG theo least privilege. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Review identity + network boundary qua architecture walkthrough.",
        "Lab: Tự giải thích luồng browser → app → DB và ai có quyền gọi API AWS; rà policy/SG theo least privilege.",
        "Debug/review: Thực hiện cost audit: kiểm tra NAT/Elastic IP/EC2 không cần thiết và dừng/xóa theo policy lab.",
        "Evidence: Lưu week05-review.md; commit/push tài liệu không nhạy cảm."
      ],
      "sources": [
        {
          "title": "AWS IAM User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l1",
      "realWorldContext": "AWS identity là điểm rủi ro cao nhất: root, IAM, policy rộng và credential dài hạn có thể gây sự cố bảo mật hoặc chi phí. Ngày này gắn với artifact: Lưu week05-review.md; commit/push tài liệu không nhạy cảm.",
      "guidedTask": "Tự giải thích luồng browser → app → DB và ai có quyền gọi API AWS; rà policy/SG theo least privilege.",
      "debugTask": "Thực hiện cost audit: kiểm tra NAT/Elastic IP/EC2 không cần thiết và dừng/xóa theo policy lab.",
      "evidenceTask": "Lưu week05-review.md; commit/push tài liệu không nhạy cảm."
    },
    "reviewQuestionIds": [
      "p2l1q1",
      "p2l1q2",
      "p2l1q3",
      "p2l1q4",
      "p2l1q5",
      "p2l1q6"
    ]
  },
  {
    "id": "d036",
    "dayNumber": 36,
    "week": 6,
    "dayOfWeek": "Mon",
    "phaseId": "p2",
    "title": "EC2 instance type, AMI, key pair, security group, user data, EBS và lifecycle stop vs terminate",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào EC2 instance type, AMI, key pair, security group, user data, EBS và lifecycle stop vs terminate. Phần lab biến kiến thức thành thao tác kiểm chứng được: Lập launch checklist; nếu tạo EC2 free-tier: public subnet, no public SSH, tag/cost guardrail; test status check. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: EC2 instance type, AMI, key pair, security group, user data, EBS và lifecycle stop vs terminate.",
        "Lab: Lập launch checklist; nếu tạo EC2 free-tier: public subnet, no public SSH, tag/cost guardrail; test status check.",
        "Debug/review: Viết decision note chọn instance type/AMI và rủi ro key pair bị mất.",
        "Evidence: Lưu ec2-launch-checklist.md; dừng instance khi hết buổi nếu không cần."
      ],
      "sources": [
        {
          "title": "Amazon EC2 User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l3",
      "realWorldContext": "Deploy EC2/S3/CloudWatch cần health check, log và cost guardrail; JD Cloud Operations thường yêu cầu vừa tạo vừa giám sát resource. Ngày này gắn với artifact: Lưu ec2-launch-checklist.md; dừng instance khi hết buổi nếu không cần.",
      "guidedTask": "Lập launch checklist; nếu tạo EC2 free-tier: public subnet, no public SSH, tag/cost guardrail; test status check.",
      "debugTask": "Viết decision note chọn instance type/AMI và rủi ro key pair bị mất.",
      "evidenceTask": "Lưu ec2-launch-checklist.md; dừng instance khi hết buổi nếu không cần."
    },
    "reviewQuestionIds": [
      "p2l3q1",
      "p2l3q2",
      "p2l3q3",
      "p2l3q4",
      "p2l3q5",
      "p2l3q6"
    ]
  },
  {
    "id": "d037",
    "dayNumber": 37,
    "week": 6,
    "dayOfWeek": "Tue",
    "phaseId": "p2",
    "title": "SSH hardening, cloud-init/user data, packages, logs, Elastic IP trade-off và Systems Manager concept",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào SSH hardening, cloud-init/user data, packages, logs, Elastic IP trade-off và Systems Manager concept. Phần lab biến kiến thức thành thao tác kiểm chứng được: Kết nối instance lab bằng SSH/SSM; chạy baseline uname, df, free, ss, update package; kiểm tra cloud-init log. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: SSH hardening, cloud-init/user data, packages, logs, Elastic IP trade-off và Systems Manager concept.",
        "Lab: Kết nối instance lab bằng SSH/SSM; chạy baseline uname, df, free, ss, update package; kiểm tra cloud-init log.",
        "Debug/review: Viết bootstrap script idempotent cài Docker/Nginx hoặc đưa dry-run script nếu chưa có EC2.",
        "Evidence: Lưu ec2-bootstrap.sh, verification output, rollback."
      ],
      "sources": [
        {
          "title": "Amazon EC2 User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l3",
      "realWorldContext": "Deploy EC2/S3/CloudWatch cần health check, log và cost guardrail; JD Cloud Operations thường yêu cầu vừa tạo vừa giám sát resource. Ngày này gắn với artifact: Lưu ec2-bootstrap.sh, verification output, rollback.",
      "guidedTask": "Kết nối instance lab bằng SSH/SSM; chạy baseline uname, df, free, ss, update package; kiểm tra cloud-init log.",
      "debugTask": "Viết bootstrap script idempotent cài Docker/Nginx hoặc đưa dry-run script nếu chưa có EC2.",
      "evidenceTask": "Lưu ec2-bootstrap.sh, verification output, rollback."
    },
    "reviewQuestionIds": [
      "p2l3q1",
      "p2l3q2",
      "p2l3q3",
      "p2l3q4",
      "p2l3q5",
      "p2l3q6"
    ]
  },
  {
    "id": "d038",
    "dayNumber": 38,
    "week": 6,
    "dayOfWeek": "Wed",
    "phaseId": "p2",
    "title": "Reverse proxy, Docker deploy, health endpoint, environment config và zero-secret README",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Reverse proxy, Docker deploy, health endpoint, environment config và zero-secret README. Phần lab biến kiến thức thành thao tác kiểm chứng được: Deploy app Docker tuần 4 lên EC2; Nginx proxy /health; kiểm tra local + external endpoint theo SG. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Reverse proxy, Docker deploy, health endpoint, environment config và zero-secret README.",
        "Lab: Deploy app Docker tuần 4 lên EC2; Nginx proxy /health; kiểm tra local + external endpoint theo SG.",
        "Debug/review: Cố ý gây 502 bằng upstream sai rồi debug log Nginx/container; khôi phục version trước.",
        "Evidence: Lưu ec2-app-deploy-runbook.md, diagram, evidence health 200."
      ],
      "sources": [
        {
          "title": "Amazon EC2 User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l3",
      "realWorldContext": "Deploy EC2/S3/CloudWatch cần health check, log và cost guardrail; JD Cloud Operations thường yêu cầu vừa tạo vừa giám sát resource. Ngày này gắn với artifact: Lưu ec2-app-deploy-runbook.md, diagram, evidence health 200.",
      "guidedTask": "Deploy app Docker tuần 4 lên EC2; Nginx proxy /health; kiểm tra local + external endpoint theo SG.",
      "debugTask": "Cố ý gây 502 bằng upstream sai rồi debug log Nginx/container; khôi phục version trước.",
      "evidenceTask": "Lưu ec2-app-deploy-runbook.md, diagram, evidence health 200."
    },
    "reviewQuestionIds": [
      "p2l3q1",
      "p2l3q2",
      "p2l3q3",
      "p2l3q4",
      "p2l3q5",
      "p2l3q6"
    ]
  },
  {
    "id": "d039",
    "dayNumber": 39,
    "week": 6,
    "dayOfWeek": "Thu",
    "phaseId": "p2",
    "title": "AMI, launch template, Auto Scaling overview, EBS snapshot, capacity vs cost trade-off",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào AMI, launch template, Auto Scaling overview, EBS snapshot, capacity vs cost trade-off. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tạo/đọc launch template/AMI flow; mô phỏng scale scenario CPU cao bằng architecture and policy, không cần giữ ASG chạy. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: AMI, launch template, Auto Scaling overview, EBS snapshot, capacity vs cost trade-off.",
        "Lab: Tạo/đọc launch template/AMI flow; mô phỏng scale scenario CPU cao bằng architecture and policy, không cần giữ ASG chạy.",
        "Debug/review: Viết rollback decision: khi nào replace instance thay vì sửa trực tiếp.",
        "Evidence: Lưu compute-resilience-notes.md và teardown inventory."
      ],
      "sources": [
        {
          "title": "Amazon EC2 User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l3",
      "realWorldContext": "Deploy EC2/S3/CloudWatch cần health check, log và cost guardrail; JD Cloud Operations thường yêu cầu vừa tạo vừa giám sát resource. Ngày này gắn với artifact: Lưu compute-resilience-notes.md và teardown inventory.",
      "guidedTask": "Tạo/đọc launch template/AMI flow; mô phỏng scale scenario CPU cao bằng architecture and policy, không cần giữ ASG chạy.",
      "debugTask": "Viết rollback decision: khi nào replace instance thay vì sửa trực tiếp.",
      "evidenceTask": "Lưu compute-resilience-notes.md và teardown inventory."
    },
    "reviewQuestionIds": [
      "p2l3q1",
      "p2l3q2",
      "p2l3q3",
      "p2l3q4",
      "p2l3q5",
      "p2l3q6"
    ]
  },
  {
    "id": "d040",
    "dayNumber": 40,
    "week": 6,
    "dayOfWeek": "Fri",
    "phaseId": "p2",
    "title": "S3 bucket/object, versioning, encryption, lifecycle, storage class, Block Public Access và IAM access",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào S3 bucket/object, versioning, encryption, lifecycle, storage class, Block Public Access và IAM access. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tạo bucket lab unique; bật versioning/encryption; upload sample backup; test list/get bằng policy tối thiểu. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: S3 bucket/object, versioning, encryption, lifecycle, storage class, Block Public Access và IAM access.",
        "Lab: Tạo bucket lab unique; bật versioning/encryption; upload sample backup; test list/get bằng policy tối thiểu.",
        "Debug/review: Xóa/khôi phục object version mẫu và ghi rủi ro khi dùng public bucket.",
        "Evidence: Lưu s3-runbook.md, lifecycle rule JSON/console note."
      ],
      "sources": [
        {
          "title": "Amazon EC2 User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l3",
      "realWorldContext": "Deploy EC2/S3/CloudWatch cần health check, log và cost guardrail; JD Cloud Operations thường yêu cầu vừa tạo vừa giám sát resource. Ngày này gắn với artifact: Lưu s3-runbook.md, lifecycle rule JSON/console note.",
      "guidedTask": "Tạo bucket lab unique; bật versioning/encryption; upload sample backup; test list/get bằng policy tối thiểu.",
      "debugTask": "Xóa/khôi phục object version mẫu và ghi rủi ro khi dùng public bucket.",
      "evidenceTask": "Lưu s3-runbook.md, lifecycle rule JSON/console note."
    },
    "reviewQuestionIds": [
      "p2l3q1",
      "p2l3q2",
      "p2l3q3",
      "p2l3q4",
      "p2l3q5",
      "p2l3q6"
    ]
  },
  {
    "id": "d041",
    "dayNumber": 41,
    "week": 6,
    "dayOfWeek": "Sat",
    "phaseId": "p2",
    "title": "Backup mindset: scope, retention, checksum, restore test, RPO/RTO sơ bộ và boto3/aws s3",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Backup mindset: scope, retention, checksum, restore test, RPO/RTO sơ bộ và boto3/aws s3. Phần lab biến kiến thức thành thao tác kiểm chứng được: Upload app log/backup archive lên S3 bằng CLI/script; verify hash local vs restored file; set prefix theo date. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Backup mindset: scope, retention, checksum, restore test, RPO/RTO sơ bộ và boto3/aws s3.",
        "Lab: Upload app log/backup archive lên S3 bằng CLI/script; verify hash local vs restored file; set prefix theo date.",
        "Debug/review: Viết restore drill từ S3 sang folder mới; xác định RPO/RTO thực tế của lab.",
        "Evidence: Lưu s3-backup.py hoặc script CLI, restore-test.md."
      ],
      "sources": [
        {
          "title": "Amazon EC2 User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l3",
      "realWorldContext": "Deploy EC2/S3/CloudWatch cần health check, log và cost guardrail; JD Cloud Operations thường yêu cầu vừa tạo vừa giám sát resource. Ngày này gắn với artifact: Lưu s3-backup.py hoặc script CLI, restore-test.md.",
      "guidedTask": "Upload app log/backup archive lên S3 bằng CLI/script; verify hash local vs restored file; set prefix theo date.",
      "debugTask": "Viết restore drill từ S3 sang folder mới; xác định RPO/RTO thực tế của lab.",
      "evidenceTask": "Lưu s3-backup.py hoặc script CLI, restore-test.md."
    },
    "reviewQuestionIds": [
      "p2l3q1",
      "p2l3q2",
      "p2l3q3",
      "p2l3q4",
      "p2l3q5",
      "p2l3q6"
    ]
  },
  {
    "id": "d042",
    "dayNumber": 42,
    "week": 6,
    "dayOfWeek": "Sun",
    "phaseId": "p2",
    "title": "Review EC2/S3 deploy as an operations task, not a one-time demo",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Review EC2/S3 deploy as an operations task, not a one-time demo. Phần lab biến kiến thức thành thao tác kiểm chứng được: Từ runbook, deploy/recover service và restore one file; kiểm tra tags/budget/resources còn chạy. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Review EC2/S3 deploy as an operations task, not a one-time demo.",
        "Lab: Từ runbook, deploy/recover service và restore one file; kiểm tra tags/budget/resources còn chạy.",
        "Debug/review: Viết incident note “app unreachable” gồm evidence, fix, prevention; dừng/xóa resource không cần.",
        "Evidence: Lưu week06-retro.md; commit/push."
      ],
      "sources": [
        {
          "title": "Amazon EC2 User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l3",
      "realWorldContext": "Deploy EC2/S3/CloudWatch cần health check, log và cost guardrail; JD Cloud Operations thường yêu cầu vừa tạo vừa giám sát resource. Ngày này gắn với artifact: Lưu week06-retro.md; commit/push.",
      "guidedTask": "Từ runbook, deploy/recover service và restore one file; kiểm tra tags/budget/resources còn chạy.",
      "debugTask": "Viết incident note “app unreachable” gồm evidence, fix, prevention; dừng/xóa resource không cần.",
      "evidenceTask": "Lưu week06-retro.md; commit/push."
    },
    "reviewQuestionIds": [
      "p2l3q1",
      "p2l3q2",
      "p2l3q3",
      "p2l3q4",
      "p2l3q5",
      "p2l3q6"
    ]
  },
  {
    "id": "d043",
    "dayNumber": 43,
    "week": 7,
    "dayOfWeek": "Mon",
    "phaseId": "p2",
    "title": "DNS hosted zone, record types A/AAAA/CNAME/alias, TTL và routing policy",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào DNS hosted zone, record types A/AAAA/CNAME/alias, TTL và routing policy. Phần lab biến kiến thức thành thao tác kiểm chứng được: Dùng domain lab hoặc hosts/diagram để mô phỏng record → load balancer; dùng dig kiểm tra record/TTL. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: DNS hosted zone, record types A/AAAA/CNAME/alias, TTL và routing policy.",
        "Lab: Dùng domain lab hoặc hosts/diagram để mô phỏng record → load balancer; dùng dig kiểm tra record/TTL.",
        "Debug/review: Viết DNS change checklist: record cũ, TTL, rollback, propagation validation.",
        "Evidence: Lưu dns-runbook.md và query output."
      ],
      "sources": [
        {
          "title": "Amazon EC2 User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l3",
      "realWorldContext": "Deploy EC2/S3/CloudWatch cần health check, log và cost guardrail; JD Cloud Operations thường yêu cầu vừa tạo vừa giám sát resource. Ngày này gắn với artifact: Lưu dns-runbook.md và query output.",
      "guidedTask": "Dùng domain lab hoặc hosts/diagram để mô phỏng record → load balancer; dùng dig kiểm tra record/TTL.",
      "debugTask": "Viết DNS change checklist: record cũ, TTL, rollback, propagation validation.",
      "evidenceTask": "Lưu dns-runbook.md và query output."
    },
    "reviewQuestionIds": [
      "p2l3q1",
      "p2l3q2",
      "p2l3q3",
      "p2l3q4",
      "p2l3q5",
      "p2l3q6"
    ]
  },
  {
    "id": "d044",
    "dayNumber": 44,
    "week": 7,
    "dayOfWeek": "Tue",
    "phaseId": "p2",
    "title": "CloudWatch metrics, namespace/dimension, alarm, dashboard, threshold vs symptom",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào CloudWatch metrics, namespace/dimension, alarm, dashboard, threshold vs symptom. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tạo/thiết kế dashboard EC2/app: CPU, network, status check, 5xx; thêm alarm CPU high theo trạng thái evaluation. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: CloudWatch metrics, namespace/dimension, alarm, dashboard, threshold vs symptom.",
        "Lab: Tạo/thiết kế dashboard EC2/app: CPU, network, status check, 5xx; thêm alarm CPU high theo trạng thái evaluation.",
        "Debug/review: Giải thích vì sao CPU 80% không luôn là incident và metric nào xác nhận user impact.",
        "Evidence: Lưu cloudwatch-dashboard-spec.md, alarm rationale."
      ],
      "sources": [
        {
          "title": "Amazon EC2 User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l3",
      "realWorldContext": "Deploy EC2/S3/CloudWatch cần health check, log và cost guardrail; JD Cloud Operations thường yêu cầu vừa tạo vừa giám sát resource. Ngày này gắn với artifact: Lưu cloudwatch-dashboard-spec.md, alarm rationale.",
      "guidedTask": "Tạo/thiết kế dashboard EC2/app: CPU, network, status check, 5xx; thêm alarm CPU high theo trạng thái evaluation.",
      "debugTask": "Giải thích vì sao CPU 80% không luôn là incident và metric nào xác nhận user impact.",
      "evidenceTask": "Lưu cloudwatch-dashboard-spec.md, alarm rationale."
    },
    "reviewQuestionIds": [
      "p2l3q1",
      "p2l3q2",
      "p2l3q3",
      "p2l3q4",
      "p2l3q5",
      "p2l3q6"
    ]
  },
  {
    "id": "d045",
    "dayNumber": 45,
    "week": 7,
    "dayOfWeek": "Wed",
    "phaseId": "p2",
    "title": "Logs: structured fields, retention, CloudWatch Agent concept, Logs Insights query",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Logs: structured fields, retention, CloudWatch Agent concept, Logs Insights query. Phần lab biến kiến thức thành thao tác kiểm chứng được: Ship/read app or Nginx log sample; viết 3 query: lỗi 5xx, top path, time range incident. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Logs: structured fields, retention, CloudWatch Agent concept, Logs Insights query.",
        "Lab: Ship/read app or Nginx log sample; viết 3 query: lỗi 5xx, top path, time range incident.",
        "Debug/review: Tạo log event mẫu có request ID/status/latency và nêu field nào còn thiếu cho triage.",
        "Evidence: Lưu logs-insights-queries.md và sample output."
      ],
      "sources": [
        {
          "title": "Amazon EC2 User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l3",
      "realWorldContext": "Deploy EC2/S3/CloudWatch cần health check, log và cost guardrail; JD Cloud Operations thường yêu cầu vừa tạo vừa giám sát resource. Ngày này gắn với artifact: Lưu logs-insights-queries.md và sample output.",
      "guidedTask": "Ship/read app or Nginx log sample; viết 3 query: lỗi 5xx, top path, time range incident.",
      "debugTask": "Tạo log event mẫu có request ID/status/latency và nêu field nào còn thiếu cho triage.",
      "evidenceTask": "Lưu logs-insights-queries.md và sample output."
    },
    "reviewQuestionIds": [
      "p2l3q1",
      "p2l3q2",
      "p2l3q3",
      "p2l3q4",
      "p2l3q5",
      "p2l3q6"
    ]
  },
  {
    "id": "d046",
    "dayNumber": 46,
    "week": 7,
    "dayOfWeek": "Thu",
    "phaseId": "p2",
    "title": "CloudFront cache behavior, origin, invalidation, cache-control, static vs dynamic content",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào CloudFront cache behavior, origin, invalidation, cache-control, static vs dynamic content. Phần lab biến kiến thức thành thao tác kiểm chứng được: Deploy static page S3/localhost design; lập distribution config dry-run và test cache header bằng curl -I nếu có endpoint. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: CloudFront cache behavior, origin, invalidation, cache-control, static vs dynamic content.",
        "Lab: Deploy static page S3/localhost design; lập distribution config dry-run và test cache header bằng curl -I nếu có endpoint.",
        "Debug/review: Chọn 3 asset nên cache dài và 2 endpoint không được cache; giải thích invalidation cost/impact.",
        "Evidence: Lưu cdn-caching-decision.md."
      ],
      "sources": [
        {
          "title": "Amazon EC2 User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l3",
      "realWorldContext": "Deploy EC2/S3/CloudWatch cần health check, log và cost guardrail; JD Cloud Operations thường yêu cầu vừa tạo vừa giám sát resource. Ngày này gắn với artifact: Lưu cdn-caching-decision.md.",
      "guidedTask": "Deploy static page S3/localhost design; lập distribution config dry-run và test cache header bằng curl -I nếu có endpoint.",
      "debugTask": "Chọn 3 asset nên cache dài và 2 endpoint không được cache; giải thích invalidation cost/impact.",
      "evidenceTask": "Lưu cdn-caching-decision.md."
    },
    "reviewQuestionIds": [
      "p2l3q1",
      "p2l3q2",
      "p2l3q3",
      "p2l3q4",
      "p2l3q5",
      "p2l3q6"
    ]
  },
  {
    "id": "d047",
    "dayNumber": 47,
    "week": 7,
    "dayOfWeek": "Fri",
    "phaseId": "p2",
    "title": "TLS/HTTPS, ACM, certificate validation, ALB/CloudFront termination, HSTS basic",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào TLS/HTTPS, ACM, certificate validation, ALB/CloudFront termination, HSTS basic. Phần lab biến kiến thức thành thao tác kiểm chứng được: Kiểm tra certificate website bằng curl -Iv/browser; phân tích issuer, expiry, hostname; mô phỏng ACM attach flow. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: TLS/HTTPS, ACM, certificate validation, ALB/CloudFront termination, HSTS basic.",
        "Lab: Kiểm tra certificate website bằng curl -Iv/browser; phân tích issuer, expiry, hostname; mô phỏng ACM attach flow.",
        "Debug/review: Viết cert renewal/expiry alert checklist; không tạo cert cho domain không sở hữu.",
        "Evidence: Lưu https-certificate-check.md."
      ],
      "sources": [
        {
          "title": "Amazon EC2 User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l3",
      "realWorldContext": "Deploy EC2/S3/CloudWatch cần health check, log và cost guardrail; JD Cloud Operations thường yêu cầu vừa tạo vừa giám sát resource. Ngày này gắn với artifact: Lưu https-certificate-check.md.",
      "guidedTask": "Kiểm tra certificate website bằng curl -Iv/browser; phân tích issuer, expiry, hostname; mô phỏng ACM attach flow.",
      "debugTask": "Viết cert renewal/expiry alert checklist; không tạo cert cho domain không sở hữu.",
      "evidenceTask": "Lưu https-certificate-check.md."
    },
    "reviewQuestionIds": [
      "p2l3q1",
      "p2l3q2",
      "p2l3q3",
      "p2l3q4",
      "p2l3q5",
      "p2l3q6"
    ]
  },
  {
    "id": "d048",
    "dayNumber": 48,
    "week": 7,
    "dayOfWeek": "Sat",
    "phaseId": "p2",
    "title": "Triaging 502/504: DNS → CDN/ALB → target health → SG → Nginx → app → DB",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Triaging 502/504: DNS → CDN/ALB → target health → SG → Nginx → app → DB. Phần lab biến kiến thức thành thao tác kiểm chứng được: Thực hành failure injection local/EC2: bad upstream, stopped app, wrong port; ghi triệu chứng/log/metric/fix từng case. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Triaging 502/504: DNS → CDN/ALB → target health → SG → Nginx → app → DB.",
        "Lab: Thực hành failure injection local/EC2: bad upstream, stopped app, wrong port; ghi triệu chứng/log/metric/fix từng case.",
        "Debug/review: Chọn case khó nhất và viết decision tree 1 trang có lệnh/read-only checks đầu tiên.",
        "Evidence: Lưu 502-504-troubleshooting.md."
      ],
      "sources": [
        {
          "title": "Amazon EC2 User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l3",
      "realWorldContext": "Deploy EC2/S3/CloudWatch cần health check, log và cost guardrail; JD Cloud Operations thường yêu cầu vừa tạo vừa giám sát resource. Ngày này gắn với artifact: Lưu 502-504-troubleshooting.md.",
      "guidedTask": "Thực hành failure injection local/EC2: bad upstream, stopped app, wrong port; ghi triệu chứng/log/metric/fix từng case.",
      "debugTask": "Chọn case khó nhất và viết decision tree 1 trang có lệnh/read-only checks đầu tiên.",
      "evidenceTask": "Lưu 502-504-troubleshooting.md."
    },
    "reviewQuestionIds": [
      "p2l3q1",
      "p2l3q2",
      "p2l3q3",
      "p2l3q4",
      "p2l3q5",
      "p2l3q6"
    ]
  },
  {
    "id": "d049",
    "dayNumber": 49,
    "week": 7,
    "dayOfWeek": "Sun",
    "phaseId": "p2",
    "title": "Postmortem, alert quality và feedback loop vận hành",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Postmortem, alert quality và feedback loop vận hành. Phần lab biến kiến thức thành thao tác kiểm chứng được: Dùng một case ngày 48 tạo postmortem: timeline, impact, detection gap, root cause, corrective/preventive action. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Postmortem, alert quality và feedback loop vận hành.",
        "Lab: Dùng một case ngày 48 tạo postmortem: timeline, impact, detection gap, root cause, corrective/preventive action.",
        "Debug/review: Rà alarm: alert có actionable, owner, runbook link và tránh noise không?.",
        "Evidence: Lưu incident-postmortem-01.md; commit/push."
      ],
      "sources": [
        {
          "title": "Amazon EC2 User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l3",
      "realWorldContext": "Deploy EC2/S3/CloudWatch cần health check, log và cost guardrail; JD Cloud Operations thường yêu cầu vừa tạo vừa giám sát resource. Ngày này gắn với artifact: Lưu incident-postmortem-01.md; commit/push.",
      "guidedTask": "Dùng một case ngày 48 tạo postmortem: timeline, impact, detection gap, root cause, corrective/preventive action.",
      "debugTask": "Rà alarm: alert có actionable, owner, runbook link và tránh noise không?.",
      "evidenceTask": "Lưu incident-postmortem-01.md; commit/push."
    },
    "reviewQuestionIds": [
      "p2l3q1",
      "p2l3q2",
      "p2l3q3",
      "p2l3q4",
      "p2l3q5",
      "p2l3q6"
    ]
  },
  {
    "id": "d050",
    "dayNumber": 50,
    "week": 8,
    "dayOfWeek": "Mon",
    "phaseId": "p2",
    "title": "RDS: instance, subnet group, Multi-AZ vs read replica, backup/snapshot, security group và connection string",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào RDS: instance, subnet group, Multi-AZ vs read replica, backup/snapshot, security group và connection string. Phần lab biến kiến thức thành thao tác kiểm chứng được: Chạy PostgreSQL local Compose hoặc RDS lab có kiểm soát; tạo schema nhỏ, backup/export, restore sang DB mới. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: RDS: instance, subnet group, Multi-AZ vs read replica, backup/snapshot, security group và connection string.",
        "Lab: Chạy PostgreSQL local Compose hoặc RDS lab có kiểm soát; tạo schema nhỏ, backup/export, restore sang DB mới.",
        "Debug/review: Viết DB access matrix và RPO/RTO lab; không public database.",
        "Evidence: Lưu rds-design-and-restore.md."
      ],
      "sources": [
        {
          "title": "Amazon RDS User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l4",
      "realWorldContext": "RDS, backup và cost control là phần nhà tuyển dụng hỏi để biết bạn có nghĩ đến dữ liệu, restore và chi phí sau demo hay không. Ngày này gắn với artifact: Lưu rds-design-and-restore.md.",
      "guidedTask": "Chạy PostgreSQL local Compose hoặc RDS lab có kiểm soát; tạo schema nhỏ, backup/export, restore sang DB mới.",
      "debugTask": "Viết DB access matrix và RPO/RTO lab; không public database.",
      "evidenceTask": "Lưu rds-design-and-restore.md."
    },
    "reviewQuestionIds": [
      "p2l4q1",
      "p2l4q2",
      "p2l4q3",
      "p2l4q4",
      "p2l4q5",
      "p2l4q6"
    ]
  },
  {
    "id": "d051",
    "dayNumber": 51,
    "week": 8,
    "dayOfWeek": "Tue",
    "phaseId": "p2",
    "title": "ECS concepts: cluster, task definition, task/service, Fargate, desired count, target group and task role",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào ECS concepts: cluster, task definition, task/service, Fargate, desired count, target group and task role. Phần lab biến kiến thức thành thao tác kiểm chứng được: Chuyển Docker app thành ECS task definition draft hoặc deploy Fargate time-boxed; validate image/env/port/log config. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: ECS concepts: cluster, task definition, task/service, Fargate, desired count, target group and task role.",
        "Lab: Chuyển Docker app thành ECS task definition draft hoặc deploy Fargate time-boxed; validate image/env/port/log config.",
        "Debug/review: So sánh ECS Fargate với EC2 Docker theo operational burden/cost cho Project 1.",
        "Evidence: Lưu ecs-deployment-plan.md và task definition sanitized."
      ],
      "sources": [
        {
          "title": "Amazon RDS User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l4",
      "realWorldContext": "RDS, backup và cost control là phần nhà tuyển dụng hỏi để biết bạn có nghĩ đến dữ liệu, restore và chi phí sau demo hay không. Ngày này gắn với artifact: Lưu ecs-deployment-plan.md và task definition sanitized.",
      "guidedTask": "Chuyển Docker app thành ECS task definition draft hoặc deploy Fargate time-boxed; validate image/env/port/log config.",
      "debugTask": "So sánh ECS Fargate với EC2 Docker theo operational burden/cost cho Project 1.",
      "evidenceTask": "Lưu ecs-deployment-plan.md và task definition sanitized."
    },
    "reviewQuestionIds": [
      "p2l4q1",
      "p2l4q2",
      "p2l4q3",
      "p2l4q4",
      "p2l4q5",
      "p2l4q6"
    ]
  },
  {
    "id": "d052",
    "dayNumber": 52,
    "week": 8,
    "dayOfWeek": "Wed",
    "phaseId": "p2",
    "title": "ECR registry, image tag strategy, immutable tags, vulnerability scan, CI trigger",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào ECR registry, image tag strategy, immutable tags, vulnerability scan, CI trigger. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tạo/thiết kế ECR repo; build tag git-sha and v1; push only if credentials/budget approved; inspect image metadata. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: ECR registry, image tag strategy, immutable tags, vulnerability scan, CI trigger.",
        "Lab: Tạo/thiết kế ECR repo; build tag git-sha and v1; push only if credentials/budget approved; inspect image metadata.",
        "Debug/review: Viết rollback rule: tag nào được deploy, tag nào bị cấm, làm sao truy vết code.",
        "Evidence: Lưu ecr-image-policy.md."
      ],
      "sources": [
        {
          "title": "Amazon RDS User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l4",
      "realWorldContext": "RDS, backup và cost control là phần nhà tuyển dụng hỏi để biết bạn có nghĩ đến dữ liệu, restore và chi phí sau demo hay không. Ngày này gắn với artifact: Lưu ecr-image-policy.md.",
      "guidedTask": "Tạo/thiết kế ECR repo; build tag git-sha and v1; push only if credentials/budget approved; inspect image metadata.",
      "debugTask": "Viết rollback rule: tag nào được deploy, tag nào bị cấm, làm sao truy vết code.",
      "evidenceTask": "Lưu ecr-image-policy.md."
    },
    "reviewQuestionIds": [
      "p2l4q1",
      "p2l4q2",
      "p2l4q3",
      "p2l4q4",
      "p2l4q5",
      "p2l4q6"
    ]
  },
  {
    "id": "d053",
    "dayNumber": 53,
    "week": 8,
    "dayOfWeek": "Thu",
    "phaseId": "p2",
    "title": "Lambda/API Gateway overview, event-driven vs container use case, timeout/retry/observability",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Lambda/API Gateway overview, event-driven vs container use case, timeout/retry/observability. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tạo Lambda Hello World local/mock or AWS; log one invocation; viết API contract cho health/report endpoint. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Lambda/API Gateway overview, event-driven vs container use case, timeout/retry/observability.",
        "Lab: Tạo Lambda Hello World local/mock or AWS; log one invocation; viết API contract cho health/report endpoint.",
        "Debug/review: Chọn ECS hay Lambda cho 3 scenario và giải thích trade-off.",
        "Evidence: Lưu compute-selection.md."
      ],
      "sources": [
        {
          "title": "Amazon RDS User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l4",
      "realWorldContext": "RDS, backup và cost control là phần nhà tuyển dụng hỏi để biết bạn có nghĩ đến dữ liệu, restore và chi phí sau demo hay không. Ngày này gắn với artifact: Lưu compute-selection.md.",
      "guidedTask": "Tạo Lambda Hello World local/mock or AWS; log one invocation; viết API contract cho health/report endpoint.",
      "debugTask": "Chọn ECS hay Lambda cho 3 scenario và giải thích trade-off.",
      "evidenceTask": "Lưu compute-selection.md."
    },
    "reviewQuestionIds": [
      "p2l4q1",
      "p2l4q2",
      "p2l4q3",
      "p2l4q4",
      "p2l4q5",
      "p2l4q6"
    ]
  },
  {
    "id": "d054",
    "dayNumber": 54,
    "week": 8,
    "dayOfWeek": "Fri",
    "phaseId": "p2",
    "title": "Project 1 planning: requirements, threat/cost constraints, components, failure modes, acceptance criteria",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Project 1 planning: requirements, threat/cost constraints, components, failure modes, acceptance criteria. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tạo repo aws-docker-webapp-deployment; vẽ architecture FastAPI/Node → ECR/ECS or EC2 → ALB/Nginx → RDS → CloudWatch. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Project 1 planning: requirements, threat/cost constraints, components, failure modes, acceptance criteria.",
        "Lab: Tạo repo aws-docker-webapp-deployment; vẽ architecture FastAPI/Node → ECR/ECS or EC2 → ALB/Nginx → RDS → CloudWatch.",
        "Debug/review: Chia backlog 5 issue: app, container, infra, pipeline, docs; chọn MVP deploy path.",
        "Evidence: Lưu PROJECT_1_DESIGN.md và issue list."
      ],
      "sources": [
        {
          "title": "Amazon RDS User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l4",
      "realWorldContext": "RDS, backup và cost control là phần nhà tuyển dụng hỏi để biết bạn có nghĩ đến dữ liệu, restore và chi phí sau demo hay không. Ngày này gắn với artifact: Lưu PROJECT_1_DESIGN.md và issue list.",
      "guidedTask": "Tạo repo aws-docker-webapp-deployment; vẽ architecture FastAPI/Node → ECR/ECS or EC2 → ALB/Nginx → RDS → CloudWatch.",
      "debugTask": "Chia backlog 5 issue: app, container, infra, pipeline, docs; chọn MVP deploy path.",
      "evidenceTask": "Lưu PROJECT_1_DESIGN.md và issue list."
    },
    "reviewQuestionIds": [
      "p2l4q1",
      "p2l4q2",
      "p2l4q3",
      "p2l4q4",
      "p2l4q5",
      "p2l4q6"
    ]
  },
  {
    "id": "d055",
    "dayNumber": 55,
    "week": 8,
    "dayOfWeek": "Sat",
    "phaseId": "p2",
    "title": "Project 1 build/deploy day: image, config, DB, health, logs and rollback",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Project 1 build/deploy day: image, config, DB, health, logs and rollback. Phần lab biến kiến thức thành thao tác kiểm chứng được: Triển khai MVP local then AWS nếu guardrail pass; test happy path + one failure; save logs/screenshots. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Project 1 build/deploy day: image, config, DB, health, logs and rollback.",
        "Lab: Triển khai MVP local then AWS nếu guardrail pass; test happy path + one failure; save logs/screenshots.",
        "Debug/review: Thực hiện teardown dry-run và kiểm tra secrets không có trong Git history.",
        "Evidence: Lưu DEPLOYMENT_RUNBOOK.md, TEARDOWN.md, evidence."
      ],
      "sources": [
        {
          "title": "Amazon RDS User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l4",
      "realWorldContext": "RDS, backup và cost control là phần nhà tuyển dụng hỏi để biết bạn có nghĩ đến dữ liệu, restore và chi phí sau demo hay không. Ngày này gắn với artifact: Lưu DEPLOYMENT_RUNBOOK.md, TEARDOWN.md, evidence.",
      "guidedTask": "Triển khai MVP local then AWS nếu guardrail pass; test happy path + one failure; save logs/screenshots.",
      "debugTask": "Thực hiện teardown dry-run và kiểm tra secrets không có trong Git history.",
      "evidenceTask": "Lưu DEPLOYMENT_RUNBOOK.md, TEARDOWN.md, evidence."
    },
    "reviewQuestionIds": [
      "p2l4q1",
      "p2l4q2",
      "p2l4q3",
      "p2l4q4",
      "p2l4q5",
      "p2l4q6"
    ]
  },
  {
    "id": "d056",
    "dayNumber": 56,
    "week": 8,
    "dayOfWeek": "Sun",
    "phaseId": "p2",
    "title": "Project 1 review: architecture walkthrough, cost review, demo narrative và interview story",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Project 1 review: architecture walkthrough, cost review, demo narrative và interview story. Phần lab biến kiến thức thành thao tác kiểm chứng được: Demo 5 phút: request flow, deploy, metric/log, failure/fix, cost control; ask yourself 5 interview questions. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Project 1 review: architecture walkthrough, cost review, demo narrative và interview story.",
        "Lab: Demo 5 phút: request flow, deploy, metric/log, failure/fix, cost control; ask yourself 5 interview questions.",
        "Debug/review: Dọn resource AWS; hoàn tất README and diagram; create release/tag.",
        "Evidence: Lưu project-1-retro.md; commit/push milestone tháng 2."
      ],
      "sources": [
        {
          "title": "Amazon RDS User Guide",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p2l4",
      "realWorldContext": "RDS, backup và cost control là phần nhà tuyển dụng hỏi để biết bạn có nghĩ đến dữ liệu, restore và chi phí sau demo hay không. Ngày này gắn với artifact: Lưu project-1-retro.md; commit/push milestone tháng 2.",
      "guidedTask": "Demo 5 phút: request flow, deploy, metric/log, failure/fix, cost control; ask yourself 5 interview questions.",
      "debugTask": "Dọn resource AWS; hoàn tất README and diagram; create release/tag.",
      "evidenceTask": "Lưu project-1-retro.md; commit/push milestone tháng 2."
    },
    "reviewQuestionIds": [
      "p2l4q1",
      "p2l4q2",
      "p2l4q3",
      "p2l4q4",
      "p2l4q5",
      "p2l4q6"
    ]
  },
  {
    "id": "d057",
    "dayNumber": 57,
    "week": 9,
    "dayOfWeek": "Mon",
    "phaseId": "p3",
    "title": "Terraform workflow: provider, resource, data, state, init/validate/plan/apply/destroy",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Terraform workflow: provider, resource, data, state, init/validate/plan/apply/destroy. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tạo repo terraform-aws-cloud-infra; chạy fmt, validate, plan với local/null resource hoặc S3 lab approved. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Terraform workflow: provider, resource, data, state, init/validate/plan/apply/destroy.",
        "Lab: Tạo repo terraform-aws-cloud-infra; chạy fmt, validate, plan với local/null resource hoặc S3 lab approved.",
        "Debug/review: Giải thích state lưu gì và vì sao không manually edit state.",
        "Evidence: Lưu main.tf, plan sanitized, terraform-basics.md."
      ],
      "sources": [
        {
          "title": "Terraform language documentation",
          "org": "HashiCorp Developer",
          "url": "https://developer.hashicorp.com/terraform/language",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to Terraform",
          "org": "HashiCorp",
          "url": "https://www.youtube.com/watch?v=ZFLWA1kQ3ls",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l1",
      "realWorldContext": "Terraform có giá trị khi plan/apply có review; deploy trước khi hiểu diff hoặc state là lỗi vận hành có thể làm hỏng hạ tầng. Ngày này gắn với artifact: Lưu main.tf, plan sanitized, terraform-basics.md.",
      "guidedTask": "Tạo repo terraform-aws-cloud-infra; chạy fmt, validate, plan với local/null resource hoặc S3 lab approved.",
      "debugTask": "Giải thích state lưu gì và vì sao không manually edit state.",
      "evidenceTask": "Lưu main.tf, plan sanitized, terraform-basics.md."
    },
    "reviewQuestionIds": [
      "p3l1q1",
      "p3l1q2",
      "p3l1q3",
      "p3l1q4",
      "p3l1q5",
      "p3l1q6"
    ]
  },
  {
    "id": "d058",
    "dayNumber": 58,
    "week": 9,
    "dayOfWeek": "Tue",
    "phaseId": "p3",
    "title": "Variables, locals, outputs, types, validation, naming/tag conventions",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Variables, locals, outputs, types, validation, naming/tag conventions. Phần lab biến kiến thức thành thao tác kiểm chứng được: Parameterize region, project, environment; output resource ID; test dev/prod tfvars sample không secret. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Variables, locals, outputs, types, validation, naming/tag conventions.",
        "Lab: Parameterize region, project, environment; output resource ID; test dev/prod tfvars sample không secret.",
        "Debug/review: Thêm validation CIDR/environment; làm plan với 2 input khác nhau.",
        "Evidence: Lưu variables.tf, outputs.tf, terraform.tfvars.example."
      ],
      "sources": [
        {
          "title": "Terraform language documentation",
          "org": "HashiCorp Developer",
          "url": "https://developer.hashicorp.com/terraform/language",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to Terraform",
          "org": "HashiCorp",
          "url": "https://www.youtube.com/watch?v=ZFLWA1kQ3ls",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l1",
      "realWorldContext": "Terraform có giá trị khi plan/apply có review; deploy trước khi hiểu diff hoặc state là lỗi vận hành có thể làm hỏng hạ tầng. Ngày này gắn với artifact: Lưu variables.tf, outputs.tf, terraform.tfvars.example.",
      "guidedTask": "Parameterize region, project, environment; output resource ID; test dev/prod tfvars sample không secret.",
      "debugTask": "Thêm validation CIDR/environment; làm plan với 2 input khác nhau.",
      "evidenceTask": "Lưu variables.tf, outputs.tf, terraform.tfvars.example."
    },
    "reviewQuestionIds": [
      "p3l1q1",
      "p3l1q2",
      "p3l1q3",
      "p3l1q4",
      "p3l1q5",
      "p3l1q6"
    ]
  },
  {
    "id": "d059",
    "dayNumber": 59,
    "week": 9,
    "dayOfWeek": "Wed",
    "phaseId": "p3",
    "title": "Module design, input/output contract, versioning, remote state S3/DynamoDB concept",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Module design, input/output contract, versioning, remote state S3/DynamoDB concept. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tách network/module nhỏ; consume from root; document module interface and expected tags. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Module design, input/output contract, versioning, remote state S3/DynamoDB concept.",
        "Lab: Tách network/module nhỏ; consume from root; document module interface and expected tags.",
        "Debug/review: Vẽ state flow team collaboration; nêu lock failure và safe recovery process.",
        "Evidence: Lưu modules/, state-strategy.md."
      ],
      "sources": [
        {
          "title": "Terraform language documentation",
          "org": "HashiCorp Developer",
          "url": "https://developer.hashicorp.com/terraform/language",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to Terraform",
          "org": "HashiCorp",
          "url": "https://www.youtube.com/watch?v=ZFLWA1kQ3ls",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l1",
      "realWorldContext": "Terraform có giá trị khi plan/apply có review; deploy trước khi hiểu diff hoặc state là lỗi vận hành có thể làm hỏng hạ tầng. Ngày này gắn với artifact: Lưu modules/, state-strategy.md.",
      "guidedTask": "Tách network/module nhỏ; consume from root; document module interface and expected tags.",
      "debugTask": "Vẽ state flow team collaboration; nêu lock failure và safe recovery process.",
      "evidenceTask": "Lưu modules/, state-strategy.md."
    },
    "reviewQuestionIds": [
      "p3l1q1",
      "p3l1q2",
      "p3l1q3",
      "p3l1q4",
      "p3l1q5",
      "p3l1q6"
    ]
  },
  {
    "id": "d060",
    "dayNumber": 60,
    "week": 9,
    "dayOfWeek": "Thu",
    "phaseId": "p3",
    "title": "Provision VPC/EC2/SG in code: dependency graph, for_each, tags, idempotency",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Provision VPC/EC2/SG in code: dependency graph, for_each, tags, idempotency. Phần lab biến kiến thức thành thao tác kiểm chứng được: Viết plan VPC + SG + EC2 smallest approved; inspect plan line-by-line before apply; use -out concept. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Provision VPC/EC2/SG in code: dependency graph, for_each, tags, idempotency.",
        "Lab: Viết plan VPC + SG + EC2 smallest approved; inspect plan line-by-line before apply; use -out concept.",
        "Debug/review: Giả lập reviewer tìm public SSH/overbroad SG; sửa code và re-plan.",
        "Evidence: Lưu reviewed-plan.md và security diff."
      ],
      "sources": [
        {
          "title": "Terraform language documentation",
          "org": "HashiCorp Developer",
          "url": "https://developer.hashicorp.com/terraform/language",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to Terraform",
          "org": "HashiCorp",
          "url": "https://www.youtube.com/watch?v=ZFLWA1kQ3ls",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l1",
      "realWorldContext": "Terraform có giá trị khi plan/apply có review; deploy trước khi hiểu diff hoặc state là lỗi vận hành có thể làm hỏng hạ tầng. Ngày này gắn với artifact: Lưu reviewed-plan.md và security diff.",
      "guidedTask": "Viết plan VPC + SG + EC2 smallest approved; inspect plan line-by-line before apply; use -out concept.",
      "debugTask": "Giả lập reviewer tìm public SSH/overbroad SG; sửa code và re-plan.",
      "evidenceTask": "Lưu reviewed-plan.md và security diff."
    },
    "reviewQuestionIds": [
      "p3l1q1",
      "p3l1q2",
      "p3l1q3",
      "p3l1q4",
      "p3l1q5",
      "p3l1q6"
    ]
  },
  {
    "id": "d061",
    "dayNumber": 61,
    "week": 9,
    "dayOfWeek": "Fri",
    "phaseId": "p3",
    "title": "Drift, refresh/plan, import, lifecycle, state mv/rm concept và recovery boundaries",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Drift, refresh/plan, import, lifecycle, state mv/rm concept và recovery boundaries. Phần lab biến kiến thức thành thao tác kiểm chứng được: Mô phỏng drift bằng changing tag via console only if lab allowed; run plan to detect then reconcile in code. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Drift, refresh/plan, import, lifecycle, state mv/rm concept và recovery boundaries.",
        "Lab: Mô phỏng drift bằng changing tag via console only if lab allowed; run plan to detect then reconcile in code.",
        "Debug/review: Viết runbook state conflict: stop concurrent applies, backup state, lock check, review before forced action.",
        "Evidence: Lưu terraform-state-troubleshooting.md."
      ],
      "sources": [
        {
          "title": "Terraform language documentation",
          "org": "HashiCorp Developer",
          "url": "https://developer.hashicorp.com/terraform/language",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to Terraform",
          "org": "HashiCorp",
          "url": "https://www.youtube.com/watch?v=ZFLWA1kQ3ls",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l1",
      "realWorldContext": "Terraform có giá trị khi plan/apply có review; deploy trước khi hiểu diff hoặc state là lỗi vận hành có thể làm hỏng hạ tầng. Ngày này gắn với artifact: Lưu terraform-state-troubleshooting.md.",
      "guidedTask": "Mô phỏng drift bằng changing tag via console only if lab allowed; run plan to detect then reconcile in code.",
      "debugTask": "Viết runbook state conflict: stop concurrent applies, backup state, lock check, review before forced action.",
      "evidenceTask": "Lưu terraform-state-troubleshooting.md."
    },
    "reviewQuestionIds": [
      "p3l1q1",
      "p3l1q2",
      "p3l1q3",
      "p3l1q4",
      "p3l1q5",
      "p3l1q6"
    ]
  },
  {
    "id": "d062",
    "dayNumber": 62,
    "week": 9,
    "dayOfWeek": "Sat",
    "phaseId": "p3",
    "title": "Terraform ECS pattern: data sources, IAM role, task definition, service dependencies and sensitive variables",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Terraform ECS pattern: data sources, IAM role, task definition, service dependencies and sensitive variables. Phần lab biến kiến thức thành thao tác kiểm chứng được: Mô hình hóa ECS components as code/dry-run; inspect dependency ordering; do not apply costly stack without approval/budget. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Terraform ECS pattern: data sources, IAM role, task definition, service dependencies and sensitive variables.",
        "Lab: Mô hình hóa ECS components as code/dry-run; inspect dependency ordering; do not apply costly stack without approval/budget.",
        "Debug/review: Viết 3 acceptance tests for infra: tags, no public DB, least-privilege ingress.",
        "Evidence: Lưu ecs-iac-design.md and checks."
      ],
      "sources": [
        {
          "title": "Terraform language documentation",
          "org": "HashiCorp Developer",
          "url": "https://developer.hashicorp.com/terraform/language",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to Terraform",
          "org": "HashiCorp",
          "url": "https://www.youtube.com/watch?v=ZFLWA1kQ3ls",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l1",
      "realWorldContext": "Terraform có giá trị khi plan/apply có review; deploy trước khi hiểu diff hoặc state là lỗi vận hành có thể làm hỏng hạ tầng. Ngày này gắn với artifact: Lưu ecs-iac-design.md and checks.",
      "guidedTask": "Mô hình hóa ECS components as code/dry-run; inspect dependency ordering; do not apply costly stack without approval/budget.",
      "debugTask": "Viết 3 acceptance tests for infra: tags, no public DB, least-privilege ingress.",
      "evidenceTask": "Lưu ecs-iac-design.md and checks."
    },
    "reviewQuestionIds": [
      "p3l1q1",
      "p3l1q2",
      "p3l1q3",
      "p3l1q4",
      "p3l1q5",
      "p3l1q6"
    ]
  },
  {
    "id": "d063",
    "dayNumber": 63,
    "week": 9,
    "dayOfWeek": "Sun",
    "phaseId": "p3",
    "title": "Week review: reproducibility is the test of IaC",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Week review: reproducibility is the test of IaC. Phần lab biến kiến thức thành thao tác kiểm chứng được: From clean working directory run init → fmt → validate → plan; independently explain each resource and destroy order. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Week review: reproducibility is the test of IaC.",
        "Lab: From clean working directory run init → fmt → validate → plan; independently explain each resource and destroy order.",
        "Debug/review: Create a broken HCL branch, diagnose and repair; peer-review own README.",
        "Evidence: Lưu week09-retro.md; commit/push."
      ],
      "sources": [
        {
          "title": "Terraform language documentation",
          "org": "HashiCorp Developer",
          "url": "https://developer.hashicorp.com/terraform/language",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to Terraform",
          "org": "HashiCorp",
          "url": "https://www.youtube.com/watch?v=ZFLWA1kQ3ls",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l1",
      "realWorldContext": "Terraform có giá trị khi plan/apply có review; deploy trước khi hiểu diff hoặc state là lỗi vận hành có thể làm hỏng hạ tầng. Ngày này gắn với artifact: Lưu week09-retro.md; commit/push.",
      "guidedTask": "From clean working directory run init → fmt → validate → plan; independently explain each resource and destroy order.",
      "debugTask": "Create a broken HCL branch, diagnose and repair; peer-review own README.",
      "evidenceTask": "Lưu week09-retro.md; commit/push."
    },
    "reviewQuestionIds": [
      "p3l1q1",
      "p3l1q2",
      "p3l1q3",
      "p3l1q4",
      "p3l1q5",
      "p3l1q6"
    ]
  },
  {
    "id": "d064",
    "dayNumber": 64,
    "week": 10,
    "dayOfWeek": "Mon",
    "phaseId": "p3",
    "title": "Workflow YAML, events, jobs, steps, matrix, runner, cache, artifact và permissions",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Workflow YAML, events, jobs, steps, matrix, runner, cache, artifact và permissions. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tạo workflow CI chạy lint/test/compile app khi push/PR; inspect logs của 1 run thành công. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Workflow YAML, events, jobs, steps, matrix, runner, cache, artifact và permissions.",
        "Lab: Tạo workflow CI chạy lint/test/compile app khi push/PR; inspect logs của 1 run thành công.",
        "Debug/review: Cố ý làm test fail rồi đọc log từ lỗi đầu tiên; sửa không bỏ qua test.",
        "Evidence: Lưu .github/workflows/ci.yml và ci-debug-notes.md."
      ],
      "sources": [
        {
          "title": "GitHub Actions documentation",
          "org": "GitHub Docs",
          "url": "https://docs.github.com/actions",
          "type": "doc",
          "verified": true
        },
        {
          "title": "How to create a pull request in 4 min",
          "org": "GitHub",
          "url": "https://www.youtube.com/watch?v=nCKdihvneS0",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l3",
      "realWorldContext": "Pipeline đáng tin phải test trước deploy, lưu artifact và có rollback; đây là yêu cầu xuất hiện dày trong JD DevOps. Ngày này gắn với artifact: Lưu .github/workflows/ci.yml và ci-debug-notes.md.",
      "guidedTask": "Tạo workflow CI chạy lint/test/compile app khi push/PR; inspect logs của 1 run thành công.",
      "debugTask": "Cố ý làm test fail rồi đọc log từ lỗi đầu tiên; sửa không bỏ qua test.",
      "evidenceTask": "Lưu .github/workflows/ci.yml và ci-debug-notes.md."
    },
    "reviewQuestionIds": [
      "p3l3q1",
      "p3l3q2",
      "p3l3q3",
      "p3l3q4",
      "p3l3q5",
      "p3l3q6"
    ]
  },
  {
    "id": "d065",
    "dayNumber": 65,
    "week": 10,
    "dayOfWeek": "Tue",
    "phaseId": "p3",
    "title": "Secrets, variables, environments, OIDC, least privilege GitHub token và masking limits",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Secrets, variables, environments, OIDC, least privilege GitHub token và masking limits. Phần lab biến kiến thức thành thao tác kiểm chứng được: Thiết kế secret inventory cho repo; cấu hình placeholder/Environment protection; draft AWS OIDC trust policy không có ID nhạy cảm. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Secrets, variables, environments, OIDC, least privilege GitHub token và masking limits.",
        "Lab: Thiết kế secret inventory cho repo; cấu hình placeholder/Environment protection; draft AWS OIDC trust policy không có ID nhạy cảm.",
        "Debug/review: Review workflow tìm echo $SECRET, hardcoded key, permissions rộng và sửa.",
        "Evidence: Lưu cicd-security-baseline.md."
      ],
      "sources": [
        {
          "title": "GitHub Actions documentation",
          "org": "GitHub Docs",
          "url": "https://docs.github.com/actions",
          "type": "doc",
          "verified": true
        },
        {
          "title": "How to create a pull request in 4 min",
          "org": "GitHub",
          "url": "https://www.youtube.com/watch?v=nCKdihvneS0",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l3",
      "realWorldContext": "Pipeline đáng tin phải test trước deploy, lưu artifact và có rollback; đây là yêu cầu xuất hiện dày trong JD DevOps. Ngày này gắn với artifact: Lưu cicd-security-baseline.md.",
      "guidedTask": "Thiết kế secret inventory cho repo; cấu hình placeholder/Environment protection; draft AWS OIDC trust policy không có ID nhạy cảm.",
      "debugTask": "Review workflow tìm echo $SECRET, hardcoded key, permissions rộng và sửa.",
      "evidenceTask": "Lưu cicd-security-baseline.md."
    },
    "reviewQuestionIds": [
      "p3l3q1",
      "p3l3q2",
      "p3l3q3",
      "p3l3q4",
      "p3l3q5",
      "p3l3q6"
    ]
  },
  {
    "id": "d066",
    "dayNumber": 66,
    "week": 10,
    "dayOfWeek": "Wed",
    "phaseId": "p3",
    "title": "Container CI: build, unit test, Dockerfile lint/scan, tag strategy and artifacts",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Container CI: build, unit test, Dockerfile lint/scan, tag strategy and artifacts. Phần lab biến kiến thức thành thao tác kiểm chứng được: Pipeline build image from Docker project, run health test container, upload test/artifact; scan if tool available. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Container CI: build, unit test, Dockerfile lint/scan, tag strategy and artifacts.",
        "Lab: Pipeline build image from Docker project, run health test container, upload test/artifact; scan if tool available.",
        "Debug/review: Add failure gate: image không deploy nếu health/scan critical fail.",
        "Evidence: Lưu container-ci.yml, test log, pass/fail policy."
      ],
      "sources": [
        {
          "title": "GitHub Actions documentation",
          "org": "GitHub Docs",
          "url": "https://docs.github.com/actions",
          "type": "doc",
          "verified": true
        },
        {
          "title": "How to create a pull request in 4 min",
          "org": "GitHub",
          "url": "https://www.youtube.com/watch?v=nCKdihvneS0",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l3",
      "realWorldContext": "Pipeline đáng tin phải test trước deploy, lưu artifact và có rollback; đây là yêu cầu xuất hiện dày trong JD DevOps. Ngày này gắn với artifact: Lưu container-ci.yml, test log, pass/fail policy.",
      "guidedTask": "Pipeline build image from Docker project, run health test container, upload test/artifact; scan if tool available.",
      "debugTask": "Add failure gate: image không deploy nếu health/scan critical fail.",
      "evidenceTask": "Lưu container-ci.yml, test log, pass/fail policy."
    },
    "reviewQuestionIds": [
      "p3l3q1",
      "p3l3q2",
      "p3l3q3",
      "p3l3q4",
      "p3l3q5",
      "p3l3q6"
    ]
  },
  {
    "id": "d067",
    "dayNumber": 67,
    "week": 10,
    "dayOfWeek": "Thu",
    "phaseId": "p3",
    "title": "CD concepts: immutable artifact, deploy stage, approval, smoke test, rollback",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào CD concepts: immutable artifact, deploy stage, approval, smoke test, rollback. Phần lab biến kiến thức thành thao tác kiểm chứng được: Mô phỏng pipeline deploy staging: build → test → approve → deploy → curl /health → rollback tag. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: CD concepts: immutable artifact, deploy stage, approval, smoke test, rollback.",
        "Lab: Mô phỏng pipeline deploy staging: build → test → approve → deploy → curl /health → rollback tag.",
        "Debug/review: Viết rollback runbook with objective proof of recovery and owner.",
        "Evidence: Lưu deployment-pipeline.md và smoke-test script."
      ],
      "sources": [
        {
          "title": "GitHub Actions documentation",
          "org": "GitHub Docs",
          "url": "https://docs.github.com/actions",
          "type": "doc",
          "verified": true
        },
        {
          "title": "How to create a pull request in 4 min",
          "org": "GitHub",
          "url": "https://www.youtube.com/watch?v=nCKdihvneS0",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l3",
      "realWorldContext": "Pipeline đáng tin phải test trước deploy, lưu artifact và có rollback; đây là yêu cầu xuất hiện dày trong JD DevOps. Ngày này gắn với artifact: Lưu deployment-pipeline.md và smoke-test script.",
      "guidedTask": "Mô phỏng pipeline deploy staging: build → test → approve → deploy → curl /health → rollback tag.",
      "debugTask": "Viết rollback runbook with objective proof of recovery and owner.",
      "evidenceTask": "Lưu deployment-pipeline.md và smoke-test script."
    },
    "reviewQuestionIds": [
      "p3l3q1",
      "p3l3q2",
      "p3l3q3",
      "p3l3q4",
      "p3l3q5",
      "p3l3q6"
    ]
  },
  {
    "id": "d068",
    "dayNumber": 68,
    "week": 10,
    "dayOfWeek": "Fri",
    "phaseId": "p3",
    "title": "Terraform in CI: fmt/validate, plan artifact on PR, policy/review, apply only controlled merge",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Terraform in CI: fmt/validate, plan artifact on PR, policy/review, apply only controlled merge. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tạo Terraform workflow dry-run; save plan text artifact; run against local/mock unless AWS guardrail allows. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Terraform in CI: fmt/validate, plan artifact on PR, policy/review, apply only controlled merge.",
        "Lab: Tạo Terraform workflow dry-run; save plan text artifact; run against local/mock unless AWS guardrail allows.",
        "Debug/review: Review plan for destructive changes; explain why terraform apply -auto-approve is risky.",
        "Evidence: Lưu terraform-plan.yml, review checklist."
      ],
      "sources": [
        {
          "title": "GitHub Actions documentation",
          "org": "GitHub Docs",
          "url": "https://docs.github.com/actions",
          "type": "doc",
          "verified": true
        },
        {
          "title": "How to create a pull request in 4 min",
          "org": "GitHub",
          "url": "https://www.youtube.com/watch?v=nCKdihvneS0",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l3",
      "realWorldContext": "Pipeline đáng tin phải test trước deploy, lưu artifact và có rollback; đây là yêu cầu xuất hiện dày trong JD DevOps. Ngày này gắn với artifact: Lưu terraform-plan.yml, review checklist.",
      "guidedTask": "Tạo Terraform workflow dry-run; save plan text artifact; run against local/mock unless AWS guardrail allows.",
      "debugTask": "Review plan for destructive changes; explain why terraform apply -auto-approve is risky.",
      "evidenceTask": "Lưu terraform-plan.yml, review checklist."
    },
    "reviewQuestionIds": [
      "p3l3q1",
      "p3l3q2",
      "p3l3q3",
      "p3l3q4",
      "p3l3q5",
      "p3l3q6"
    ]
  },
  {
    "id": "d069",
    "dayNumber": 69,
    "week": 10,
    "dayOfWeek": "Sat",
    "phaseId": "p3",
    "title": "CI/CD failure modes: YAML, permissions, missing secret, cache, test flake, artifact/tag mismatch",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào CI/CD failure modes: YAML, permissions, missing secret, cache, test flake, artifact/tag mismatch. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tạo 5 broken workflow scenarios (branch/commit) and repair each by evidence from log. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: CI/CD failure modes: YAML, permissions, missing secret, cache, test flake, artifact/tag mismatch.",
        "Lab: Tạo 5 broken workflow scenarios (branch/commit) and repair each by evidence from log.",
        "Debug/review: Viết “first 10 minutes” playbook when pipeline fails.",
        "Evidence: Lưu github-actions-troubleshooting.md."
      ],
      "sources": [
        {
          "title": "GitHub Actions documentation",
          "org": "GitHub Docs",
          "url": "https://docs.github.com/actions",
          "type": "doc",
          "verified": true
        },
        {
          "title": "How to create a pull request in 4 min",
          "org": "GitHub",
          "url": "https://www.youtube.com/watch?v=nCKdihvneS0",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l3",
      "realWorldContext": "Pipeline đáng tin phải test trước deploy, lưu artifact và có rollback; đây là yêu cầu xuất hiện dày trong JD DevOps. Ngày này gắn với artifact: Lưu github-actions-troubleshooting.md.",
      "guidedTask": "Tạo 5 broken workflow scenarios (branch/commit) and repair each by evidence from log.",
      "debugTask": "Viết “first 10 minutes” playbook when pipeline fails.",
      "evidenceTask": "Lưu github-actions-troubleshooting.md."
    },
    "reviewQuestionIds": [
      "p3l3q1",
      "p3l3q2",
      "p3l3q3",
      "p3l3q4",
      "p3l3q5",
      "p3l3q6"
    ]
  },
  {
    "id": "d070",
    "dayNumber": 70,
    "week": 10,
    "dayOfWeek": "Sun",
    "phaseId": "p3",
    "title": "Pipeline checkpoint: explain every trigger and security boundary",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Pipeline checkpoint: explain every trigger and security boundary. Phần lab biến kiến thức thành thao tác kiểm chứng được: Run full CI locally/remote; simulate failed test then successful green deployment dry-run; inspect Git history and artifact link. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Pipeline checkpoint: explain every trigger and security boundary.",
        "Lab: Run full CI locally/remote; simulate failed test then successful green deployment dry-run; inspect Git history and artifact link.",
        "Debug/review: Update README badge/instructions without claiming deploy not actually run.",
        "Evidence: Lưu week10-retro.md; commit/push."
      ],
      "sources": [
        {
          "title": "GitHub Actions documentation",
          "org": "GitHub Docs",
          "url": "https://docs.github.com/actions",
          "type": "doc",
          "verified": true
        },
        {
          "title": "How to create a pull request in 4 min",
          "org": "GitHub",
          "url": "https://www.youtube.com/watch?v=nCKdihvneS0",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l3",
      "realWorldContext": "Pipeline đáng tin phải test trước deploy, lưu artifact và có rollback; đây là yêu cầu xuất hiện dày trong JD DevOps. Ngày này gắn với artifact: Lưu week10-retro.md; commit/push.",
      "guidedTask": "Run full CI locally/remote; simulate failed test then successful green deployment dry-run; inspect Git history and artifact link.",
      "debugTask": "Update README badge/instructions without claiming deploy not actually run.",
      "evidenceTask": "Lưu week10-retro.md; commit/push."
    },
    "reviewQuestionIds": [
      "p3l3q1",
      "p3l3q2",
      "p3l3q3",
      "p3l3q4",
      "p3l3q5",
      "p3l3q6"
    ]
  },
  {
    "id": "d071",
    "dayNumber": 71,
    "week": 11,
    "dayOfWeek": "Mon",
    "phaseId": "p3",
    "title": "Nginx config context, server/location, reverse proxy headers, upstream, access/error logs",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Nginx config context, server/location, reverse proxy headers, upstream, access/error logs. Phần lab biến kiến thức thành thao tác kiểm chứng được: Cấu hình Nginx proxy app Docker/local; test /health, headers and status; inspect both Nginx/app logs. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Nginx config context, server/location, reverse proxy headers, upstream, access/error logs.",
        "Lab: Cấu hình Nginx proxy app Docker/local; test /health, headers and status; inspect both Nginx/app logs.",
        "Debug/review: Vẽ request path client → Nginx → app and identify timeout owner.",
        "Evidence: Lưu nginx.conf sanitized, reverse-proxy-runbook.md."
      ],
      "sources": [
        {
          "title": "Ansible documentation",
          "org": "Ansible",
          "url": "https://docs.ansible.com/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to Terraform",
          "org": "HashiCorp",
          "url": "https://www.youtube.com/watch?v=ZFLWA1kQ3ls",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l4",
      "realWorldContext": "Ansible/Nginx lab mô phỏng công việc cấu hình server lặp lại, giảm thao tác tay và giúp xử lý 502 bằng log/runbook. Ngày này gắn với artifact: Lưu nginx.conf sanitized, reverse-proxy-runbook.md.",
      "guidedTask": "Cấu hình Nginx proxy app Docker/local; test /health, headers and status; inspect both Nginx/app logs.",
      "debugTask": "Vẽ request path client → Nginx → app and identify timeout owner.",
      "evidenceTask": "Lưu nginx.conf sanitized, reverse-proxy-runbook.md."
    },
    "reviewQuestionIds": [
      "p3l4q1",
      "p3l4q2",
      "p3l4q3",
      "p3l4q4",
      "p3l4q5",
      "p3l4q6"
    ]
  },
  {
    "id": "d072",
    "dayNumber": 72,
    "week": 11,
    "dayOfWeek": "Tue",
    "phaseId": "p3",
    "title": "TLS termination, HTTP redirect, security headers, timeouts and config validation",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào TLS termination, HTTP redirect, security headers, timeouts and config validation. Phần lab biến kiến thức thành thao tác kiểm chứng được: Dùng self-signed/local or existing cert; test nginx -t, redirect and header; never use fake production certificate. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: TLS termination, HTTP redirect, security headers, timeouts and config validation.",
        "Lab: Dùng self-signed/local or existing cert; test nginx -t, redirect and header; never use fake production certificate.",
        "Debug/review: Set/justify proxy timeout for one API scenario and document rollback.",
        "Evidence: Lưu nginx-https-hardening.md."
      ],
      "sources": [
        {
          "title": "Ansible documentation",
          "org": "Ansible",
          "url": "https://docs.ansible.com/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to Terraform",
          "org": "HashiCorp",
          "url": "https://www.youtube.com/watch?v=ZFLWA1kQ3ls",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l4",
      "realWorldContext": "Ansible/Nginx lab mô phỏng công việc cấu hình server lặp lại, giảm thao tác tay và giúp xử lý 502 bằng log/runbook. Ngày này gắn với artifact: Lưu nginx-https-hardening.md.",
      "guidedTask": "Dùng self-signed/local or existing cert; test nginx -t, redirect and header; never use fake production certificate.",
      "debugTask": "Set/justify proxy timeout for one API scenario and document rollback.",
      "evidenceTask": "Lưu nginx-https-hardening.md."
    },
    "reviewQuestionIds": [
      "p3l4q1",
      "p3l4q2",
      "p3l4q3",
      "p3l4q4",
      "p3l4q5",
      "p3l4q6"
    ]
  },
  {
    "id": "d073",
    "dayNumber": 73,
    "week": 11,
    "dayOfWeek": "Wed",
    "phaseId": "p3",
    "title": "Debug 502/504: DNS/port/upstream/socket/permission/timeout; evidence ordering",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Debug 502/504: DNS/port/upstream/socket/permission/timeout; evidence ordering. Phần lab biến kiến thức thành thao tác kiểm chứng được: Inject 5 errors: stopped app, wrong port, bad upstream, slow response, bad permission; investigate each with log/command. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Debug 502/504: DNS/port/upstream/socket/permission/timeout; evidence ordering.",
        "Lab: Inject 5 errors: stopped app, wrong port, bad upstream, slow response, bad permission; investigate each with log/command.",
        "Debug/review: Create decision tree mapping symptom → first check → evidence → safe fix.",
        "Evidence: Lưu nginx-502-504-lab.md."
      ],
      "sources": [
        {
          "title": "Ansible documentation",
          "org": "Ansible",
          "url": "https://docs.ansible.com/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to Terraform",
          "org": "HashiCorp",
          "url": "https://www.youtube.com/watch?v=ZFLWA1kQ3ls",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l4",
      "realWorldContext": "Ansible/Nginx lab mô phỏng công việc cấu hình server lặp lại, giảm thao tác tay và giúp xử lý 502 bằng log/runbook. Ngày này gắn với artifact: Lưu nginx-502-504-lab.md.",
      "guidedTask": "Inject 5 errors: stopped app, wrong port, bad upstream, slow response, bad permission; investigate each with log/command.",
      "debugTask": "Create decision tree mapping symptom → first check → evidence → safe fix.",
      "evidenceTask": "Lưu nginx-502-504-lab.md."
    },
    "reviewQuestionIds": [
      "p3l4q1",
      "p3l4q2",
      "p3l4q3",
      "p3l4q4",
      "p3l4q5",
      "p3l4q6"
    ]
  },
  {
    "id": "d074",
    "dayNumber": 74,
    "week": 11,
    "dayOfWeek": "Thu",
    "phaseId": "p3",
    "title": "Ansible inventory, play, task, module, variable, handler, facts and idempotency",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Ansible inventory, play, task, module, variable, handler, facts and idempotency. Phần lab biến kiến thức thành thao tác kiểm chứng được: Create localhost/lab inventory and playbook install Nginx/configure index; run twice, compare changed count. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Ansible inventory, play, task, module, variable, handler, facts and idempotency.",
        "Lab: Create localhost/lab inventory and playbook install Nginx/configure index; run twice, compare changed count.",
        "Debug/review: Use ansible-lint if available or manually inspect names/changed_when; add --check behavior note.",
        "Evidence: Lưu site.yml, inventory example, ansible-basics.md."
      ],
      "sources": [
        {
          "title": "Ansible documentation",
          "org": "Ansible",
          "url": "https://docs.ansible.com/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to Terraform",
          "org": "HashiCorp",
          "url": "https://www.youtube.com/watch?v=ZFLWA1kQ3ls",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l4",
      "realWorldContext": "Ansible/Nginx lab mô phỏng công việc cấu hình server lặp lại, giảm thao tác tay và giúp xử lý 502 bằng log/runbook. Ngày này gắn với artifact: Lưu site.yml, inventory example, ansible-basics.md.",
      "guidedTask": "Create localhost/lab inventory and playbook install Nginx/configure index; run twice, compare changed count.",
      "debugTask": "Use ansible-lint if available or manually inspect names/changed_when; add --check behavior note.",
      "evidenceTask": "Lưu site.yml, inventory example, ansible-basics.md."
    },
    "reviewQuestionIds": [
      "p3l4q1",
      "p3l4q2",
      "p3l4q3",
      "p3l4q4",
      "p3l4q5",
      "p3l4q6"
    ]
  },
  {
    "id": "d075",
    "dayNumber": 75,
    "week": 11,
    "dayOfWeek": "Fri",
    "phaseId": "p3",
    "title": "Templates, variables by environment, handlers, notify and secret strategy",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Templates, variables by environment, handlers, notify and secret strategy. Phần lab biến kiến thức thành thao tác kiểm chứng được: Make Jinja2 Nginx template for dev/staging; change one variable then validate handler reload occurs only on config change. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Templates, variables by environment, handlers, notify and secret strategy.",
        "Lab: Make Jinja2 Nginx template for dev/staging; change one variable then validate handler reload occurs only on config change.",
        "Debug/review: Write variable precedence and secret handling policy; use placeholders only.",
        "Evidence: Lưu templates/, group_vars/, configuration-management.md."
      ],
      "sources": [
        {
          "title": "Ansible documentation",
          "org": "Ansible",
          "url": "https://docs.ansible.com/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to Terraform",
          "org": "HashiCorp",
          "url": "https://www.youtube.com/watch?v=ZFLWA1kQ3ls",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l4",
      "realWorldContext": "Ansible/Nginx lab mô phỏng công việc cấu hình server lặp lại, giảm thao tác tay và giúp xử lý 502 bằng log/runbook. Ngày này gắn với artifact: Lưu templates/, group_vars/, configuration-management.md.",
      "guidedTask": "Make Jinja2 Nginx template for dev/staging; change one variable then validate handler reload occurs only on config change.",
      "debugTask": "Write variable precedence and secret handling policy; use placeholders only.",
      "evidenceTask": "Lưu templates/, group_vars/, configuration-management.md."
    },
    "reviewQuestionIds": [
      "p3l4q1",
      "p3l4q2",
      "p3l4q3",
      "p3l4q4",
      "p3l4q5",
      "p3l4q6"
    ]
  },
  {
    "id": "d076",
    "dayNumber": 76,
    "week": 11,
    "dayOfWeek": "Sat",
    "phaseId": "p3",
    "title": "Automated deploy: backup current config, deploy image/config, verify health, rollback on failure",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Automated deploy: backup current config, deploy image/config, verify health, rollback on failure. Phần lab biến kiến thức thành thao tác kiểm chứng được: Write playbook workflow with precheck, deploy, validation and rollback block/rescue for local/lab host. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Automated deploy: backup current config, deploy image/config, verify health, rollback on failure.",
        "Lab: Write playbook workflow with precheck, deploy, validation and rollback block/rescue for local/lab host.",
        "Debug/review: Simulate failed health validation; prove rollback restores previous response.",
        "Evidence: Lưu deploy.yml, rollback-runbook.md, test evidence."
      ],
      "sources": [
        {
          "title": "Ansible documentation",
          "org": "Ansible",
          "url": "https://docs.ansible.com/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to Terraform",
          "org": "HashiCorp",
          "url": "https://www.youtube.com/watch?v=ZFLWA1kQ3ls",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l4",
      "realWorldContext": "Ansible/Nginx lab mô phỏng công việc cấu hình server lặp lại, giảm thao tác tay và giúp xử lý 502 bằng log/runbook. Ngày này gắn với artifact: Lưu deploy.yml, rollback-runbook.md, test evidence.",
      "guidedTask": "Write playbook workflow with precheck, deploy, validation and rollback block/rescue for local/lab host.",
      "debugTask": "Simulate failed health validation; prove rollback restores previous response.",
      "evidenceTask": "Lưu deploy.yml, rollback-runbook.md, test evidence."
    },
    "reviewQuestionIds": [
      "p3l4q1",
      "p3l4q2",
      "p3l4q3",
      "p3l4q4",
      "p3l4q5",
      "p3l4q6"
    ]
  },
  {
    "id": "d077",
    "dayNumber": 77,
    "week": 11,
    "dayOfWeek": "Sun",
    "phaseId": "p3",
    "title": "Project 2 planning: combine Terraform + CI + Nginx/Ansible as production-like IaC story",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Project 2 planning: combine Terraform + CI + Nginx/Ansible as production-like IaC story. Phần lab biến kiến thức thành thao tác kiểm chứng được: Create Project 2 backlog/architecture; trace each component to test, deploy, observability and teardown. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Project 2 planning: combine Terraform + CI + Nginx/Ansible as production-like IaC story.",
        "Lab: Create Project 2 backlog/architecture; trace each component to test, deploy, observability and teardown.",
        "Debug/review: Review for manual steps still undocumented; turn the highest-risk one into a runbook task.",
        "Evidence: Lưu project-2-plan.md; commit/push."
      ],
      "sources": [
        {
          "title": "Ansible documentation",
          "org": "Ansible",
          "url": "https://docs.ansible.com/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to Terraform",
          "org": "HashiCorp",
          "url": "https://www.youtube.com/watch?v=ZFLWA1kQ3ls",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l4",
      "realWorldContext": "Ansible/Nginx lab mô phỏng công việc cấu hình server lặp lại, giảm thao tác tay và giúp xử lý 502 bằng log/runbook. Ngày này gắn với artifact: Lưu project-2-plan.md; commit/push.",
      "guidedTask": "Create Project 2 backlog/architecture; trace each component to test, deploy, observability and teardown.",
      "debugTask": "Review for manual steps still undocumented; turn the highest-risk one into a runbook task.",
      "evidenceTask": "Lưu project-2-plan.md; commit/push."
    },
    "reviewQuestionIds": [
      "p3l4q1",
      "p3l4q2",
      "p3l4q3",
      "p3l4q4",
      "p3l4q5",
      "p3l4q6"
    ]
  },
  {
    "id": "d078",
    "dayNumber": 78,
    "week": 12,
    "dayOfWeek": "Mon",
    "phaseId": "p3",
    "title": "Project structure and module contract: VPC, security, compute, data; separation of concerns",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Project structure and module contract: VPC, security, compute, data; separation of concerns. Phần lab biến kiến thức thành thao tác kiểm chứng được: Scaffold modules/vpc, security, compute, optional rds; define README and provider/tag conventions. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Project structure and module contract: VPC, security, compute, data; separation of concerns.",
        "Lab: Scaffold modules/vpc, security, compute, optional rds; define README and provider/tag conventions.",
        "Debug/review: Run fmt/validate from root and module directories; fix path/version inconsistencies.",
        "Evidence: Lưu initial project skeleton and ARCHITECTURE.md."
      ],
      "sources": [
        {
          "title": "Terraform state documentation",
          "org": "HashiCorp Developer",
          "url": "https://developer.hashicorp.com/terraform/language/state",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to Terraform",
          "org": "HashiCorp",
          "url": "https://www.youtube.com/watch?v=ZFLWA1kQ3ls",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l2",
      "realWorldContext": "Remote state, module và import là nền để làm IaC theo team; state conflict là case thực tế hơn nhiều so với viết HCL đơn lẻ. Ngày này gắn với artifact: Lưu initial project skeleton and ARCHITECTURE.md.",
      "guidedTask": "Scaffold modules/vpc, security, compute, optional rds; define README and provider/tag conventions.",
      "debugTask": "Run fmt/validate from root and module directories; fix path/version inconsistencies.",
      "evidenceTask": "Lưu initial project skeleton and ARCHITECTURE.md."
    },
    "reviewQuestionIds": [
      "p3l2q1",
      "p3l2q2",
      "p3l2q3",
      "p3l2q4",
      "p3l2q5",
      "p3l2q6"
    ]
  },
  {
    "id": "d079",
    "dayNumber": 79,
    "week": 12,
    "dayOfWeek": "Tue",
    "phaseId": "p3",
    "title": "VPC module implementation: AZ/subnet/route/IGW/NAT cost decision and outputs",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào VPC module implementation: AZ/subnet/route/IGW/NAT cost decision and outputs. Phần lab biến kiến thức thành thao tác kiểm chứng được: Implement/complete VPC module in dry-run; output VPC/subnet IDs; test different CIDR via tfvars example. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: VPC module implementation: AZ/subnet/route/IGW/NAT cost decision and outputs.",
        "Lab: Implement/complete VPC module in dry-run; output VPC/subnet IDs; test different CIDR via tfvars example.",
        "Debug/review: Review routes/SG matrix against Week 5 design; document NAT optionality/cost.",
        "Evidence: Lưu plan evidence and module usage example."
      ],
      "sources": [
        {
          "title": "Terraform state documentation",
          "org": "HashiCorp Developer",
          "url": "https://developer.hashicorp.com/terraform/language/state",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to Terraform",
          "org": "HashiCorp",
          "url": "https://www.youtube.com/watch?v=ZFLWA1kQ3ls",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l2",
      "realWorldContext": "Remote state, module và import là nền để làm IaC theo team; state conflict là case thực tế hơn nhiều so với viết HCL đơn lẻ. Ngày này gắn với artifact: Lưu plan evidence and module usage example.",
      "guidedTask": "Implement/complete VPC module in dry-run; output VPC/subnet IDs; test different CIDR via tfvars example.",
      "debugTask": "Review routes/SG matrix against Week 5 design; document NAT optionality/cost.",
      "evidenceTask": "Lưu plan evidence and module usage example."
    },
    "reviewQuestionIds": [
      "p3l2q1",
      "p3l2q2",
      "p3l2q3",
      "p3l2q4",
      "p3l2q5",
      "p3l2q6"
    ]
  },
  {
    "id": "d080",
    "dayNumber": 80,
    "week": 12,
    "dayOfWeek": "Wed",
    "phaseId": "p3",
    "title": "Compute/data module and dependency: EC2 launch template, SG, RDS private placement, encryption/backup decisions",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Compute/data module and dependency: EC2 launch template, SG, RDS private placement, encryption/backup decisions. Phần lab biến kiến thức thành thao tác kiểm chứng được: Implement only approved resources or mock flags; plan and review any replacement/destruction action. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Compute/data module and dependency: EC2 launch template, SG, RDS private placement, encryption/backup decisions.",
        "Lab: Implement only approved resources or mock flags; plan and review any replacement/destruction action.",
        "Debug/review: Add preconditions/variables that prevent public DB and broad SSH where practical.",
        "Evidence: Lưu security controls note and tested plan."
      ],
      "sources": [
        {
          "title": "Terraform state documentation",
          "org": "HashiCorp Developer",
          "url": "https://developer.hashicorp.com/terraform/language/state",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to Terraform",
          "org": "HashiCorp",
          "url": "https://www.youtube.com/watch?v=ZFLWA1kQ3ls",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l2",
      "realWorldContext": "Remote state, module và import là nền để làm IaC theo team; state conflict là case thực tế hơn nhiều so với viết HCL đơn lẻ. Ngày này gắn với artifact: Lưu security controls note and tested plan.",
      "guidedTask": "Implement only approved resources or mock flags; plan and review any replacement/destruction action.",
      "debugTask": "Add preconditions/variables that prevent public DB and broad SSH where practical.",
      "evidenceTask": "Lưu security controls note and tested plan."
    },
    "reviewQuestionIds": [
      "p3l2q1",
      "p3l2q2",
      "p3l2q3",
      "p3l2q4",
      "p3l2q5",
      "p3l2q6"
    ]
  },
  {
    "id": "d081",
    "dayNumber": 81,
    "week": 12,
    "dayOfWeek": "Thu",
    "phaseId": "p3",
    "title": "Remote state/backends and CI integration with plan artifacts, environment separation",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Remote state/backends and CI integration with plan artifacts, environment separation. Phần lab biến kiến thức thành thao tác kiểm chứng được: Configure documented backend pattern (real only if existing secured bucket); integrate PR plan workflow. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Remote state/backends and CI integration with plan artifacts, environment separation.",
        "Lab: Configure documented backend pattern (real only if existing secured bucket); integrate PR plan workflow.",
        "Debug/review: Perform simulated PR: introduce tag/security change, inspect plan, approve/reject based on checklist.",
        "Evidence: Lưu PR template and plan review record."
      ],
      "sources": [
        {
          "title": "Terraform state documentation",
          "org": "HashiCorp Developer",
          "url": "https://developer.hashicorp.com/terraform/language/state",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to Terraform",
          "org": "HashiCorp",
          "url": "https://www.youtube.com/watch?v=ZFLWA1kQ3ls",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l2",
      "realWorldContext": "Remote state, module và import là nền để làm IaC theo team; state conflict là case thực tế hơn nhiều so với viết HCL đơn lẻ. Ngày này gắn với artifact: Lưu PR template and plan review record.",
      "guidedTask": "Configure documented backend pattern (real only if existing secured bucket); integrate PR plan workflow.",
      "debugTask": "Perform simulated PR: introduce tag/security change, inspect plan, approve/reject based on checklist.",
      "evidenceTask": "Lưu PR template and plan review record."
    },
    "reviewQuestionIds": [
      "p3l2q1",
      "p3l2q2",
      "p3l2q3",
      "p3l2q4",
      "p3l2q5",
      "p3l2q6"
    ]
  },
  {
    "id": "d082",
    "dayNumber": 82,
    "week": 12,
    "dayOfWeek": "Fri",
    "phaseId": "p3",
    "title": "Architecture diagrams and docs that prove operational understanding",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Architecture diagrams and docs that prove operational understanding. Phần lab biến kiến thức thành thao tác kiểm chứng được: Create diagram (Mermaid/draw.io) with traffic, trust boundaries, state and monitoring; label cost-sensitive services. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Architecture diagrams and docs that prove operational understanding.",
        "Lab: Create diagram (Mermaid/draw.io) with traffic, trust boundaries, state and monitoring; label cost-sensitive services.",
        "Debug/review: Write run path init → plan → apply → verify → destroy; have a fresh terminal follow it.",
        "Evidence: Lưu diagram and OPERATIONS.md."
      ],
      "sources": [
        {
          "title": "Terraform state documentation",
          "org": "HashiCorp Developer",
          "url": "https://developer.hashicorp.com/terraform/language/state",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to Terraform",
          "org": "HashiCorp",
          "url": "https://www.youtube.com/watch?v=ZFLWA1kQ3ls",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l2",
      "realWorldContext": "Remote state, module và import là nền để làm IaC theo team; state conflict là case thực tế hơn nhiều so với viết HCL đơn lẻ. Ngày này gắn với artifact: Lưu diagram and OPERATIONS.md.",
      "guidedTask": "Create diagram (Mermaid/draw.io) with traffic, trust boundaries, state and monitoring; label cost-sensitive services.",
      "debugTask": "Write run path init → plan → apply → verify → destroy; have a fresh terminal follow it.",
      "evidenceTask": "Lưu diagram and OPERATIONS.md."
    },
    "reviewQuestionIds": [
      "p3l2q1",
      "p3l2q2",
      "p3l2q3",
      "p3l2q4",
      "p3l2q5",
      "p3l2q6"
    ]
  },
  {
    "id": "d083",
    "dayNumber": 83,
    "week": 12,
    "dayOfWeek": "Sat",
    "phaseId": "p3",
    "title": "Code review, testing strategy, security/cost review and portfolio narrative",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Code review, testing strategy, security/cost review and portfolio narrative. Phần lab biến kiến thức thành thao tác kiểm chứng được: Run fmt/validate/plan; inspect Git diff; check no state/secrets; test destroy plan without applying destruction blindly. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Code review, testing strategy, security/cost review and portfolio narrative.",
        "Lab: Run fmt/validate/plan; inspect Git diff; check no state/secrets; test destroy plan without applying destruction blindly.",
        "Debug/review: Prepare 3-minute explanation of module design and a state conflict incident answer.",
        "Evidence: Lưu project-2-review.md."
      ],
      "sources": [
        {
          "title": "Terraform state documentation",
          "org": "HashiCorp Developer",
          "url": "https://developer.hashicorp.com/terraform/language/state",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to Terraform",
          "org": "HashiCorp",
          "url": "https://www.youtube.com/watch?v=ZFLWA1kQ3ls",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l2",
      "realWorldContext": "Remote state, module và import là nền để làm IaC theo team; state conflict là case thực tế hơn nhiều so với viết HCL đơn lẻ. Ngày này gắn với artifact: Lưu project-2-review.md.",
      "guidedTask": "Run fmt/validate/plan; inspect Git diff; check no state/secrets; test destroy plan without applying destruction blindly.",
      "debugTask": "Prepare 3-minute explanation of module design and a state conflict incident answer.",
      "evidenceTask": "Lưu project-2-review.md."
    },
    "reviewQuestionIds": [
      "p3l2q1",
      "p3l2q2",
      "p3l2q3",
      "p3l2q4",
      "p3l2q5",
      "p3l2q6"
    ]
  },
  {
    "id": "d084",
    "dayNumber": 84,
    "week": 12,
    "dayOfWeek": "Sun",
    "phaseId": "p3",
    "title": "Project 2 release and month 3 checkpoint",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Project 2 release and month 3 checkpoint. Phần lab biến kiến thức thành thao tác kiểm chứng được: From clone/readme, execute safe validation and show CI; record real vs simulated components honestly. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Project 2 release and month 3 checkpoint.",
        "Lab: From clone/readme, execute safe validation and show CI; record real vs simulated components honestly.",
        "Debug/review: Tag release; update portfolio evidence list; clean lab resources according to teardown.",
        "Evidence: Lưu project-2-demo.md; commit/push milestone."
      ],
      "sources": [
        {
          "title": "Terraform state documentation",
          "org": "HashiCorp Developer",
          "url": "https://developer.hashicorp.com/terraform/language/state",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to Terraform",
          "org": "HashiCorp",
          "url": "https://www.youtube.com/watch?v=ZFLWA1kQ3ls",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p3l2",
      "realWorldContext": "Remote state, module và import là nền để làm IaC theo team; state conflict là case thực tế hơn nhiều so với viết HCL đơn lẻ. Ngày này gắn với artifact: Lưu project-2-demo.md; commit/push milestone.",
      "guidedTask": "From clone/readme, execute safe validation and show CI; record real vs simulated components honestly.",
      "debugTask": "Tag release; update portfolio evidence list; clean lab resources according to teardown.",
      "evidenceTask": "Lưu project-2-demo.md; commit/push milestone."
    },
    "reviewQuestionIds": [
      "p3l2q1",
      "p3l2q2",
      "p3l2q3",
      "p3l2q4",
      "p3l2q5",
      "p3l2q6"
    ]
  },
  {
    "id": "d085",
    "dayNumber": 85,
    "week": 13,
    "dayOfWeek": "Mon",
    "phaseId": "p4",
    "title": "Control plane, node, kubelet, API server, scheduler, etcd, desired state and kubectl context",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Control plane, node, kubelet, API server, scheduler, etcd, desired state and kubectl context. Phần lab biến kiến thức thành thao tác kiểm chứng được: Cài/kiểm tra kind; create cluster; run kubectl cluster-info, nodes, namespaces; export context safely. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Control plane, node, kubelet, API server, scheduler, etcd, desired state and kubectl context.",
        "Lab: Cài/kiểm tra kind; create cluster; run kubectl cluster-info, nodes, namespaces; export context safely.",
        "Debug/review: Vẽ request flow from kubectl apply to scheduled Pod.",
        "Evidence: Lưu cluster-setup.md and teardown kind delete cluster."
      ],
      "sources": [
        {
          "title": "Kubernetes concepts",
          "org": "Kubernetes Docs",
          "url": "https://kubernetes.io/docs/concepts/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l1",
      "realWorldContext": "CrashLoopBackOff, Pending và ImagePullBackOff là sự cố Kubernetes kinh điển; cần đọc describe/logs/events trước khi sửa manifest. Ngày này gắn với artifact: Lưu cluster-setup.md and teardown kind delete cluster.",
      "guidedTask": "Cài/kiểm tra kind; create cluster; run kubectl cluster-info, nodes, namespaces; export context safely.",
      "debugTask": "Vẽ request flow from kubectl apply to scheduled Pod.",
      "evidenceTask": "Lưu cluster-setup.md and teardown kind delete cluster."
    },
    "reviewQuestionIds": [
      "p4l1q1",
      "p4l1q2",
      "p4l1q3",
      "p4l1q4",
      "p4l1q5",
      "p4l1q6"
    ]
  },
  {
    "id": "d086",
    "dayNumber": 86,
    "week": 13,
    "dayOfWeek": "Tue",
    "phaseId": "p4",
    "title": "Pod, ReplicaSet, Deployment, label/selector and rollout",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Pod, ReplicaSet, Deployment, label/selector and rollout. Phần lab biến kiến thức thành thao tác kiểm chứng được: Deploy Nginx/hello app with 3 replicas; inspect get, describe, logs; change image and observe rollout history. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Pod, ReplicaSet, Deployment, label/selector and rollout.",
        "Lab: Deploy Nginx/hello app with 3 replicas; inspect get, describe, logs; change image and observe rollout history.",
        "Debug/review: Roll back one bad image rollout; explain why Pods are not deployed directly for app lifecycle.",
        "Evidence: Lưu deployment.yaml, rollout evidence, workload-runbook.md."
      ],
      "sources": [
        {
          "title": "Kubernetes concepts",
          "org": "Kubernetes Docs",
          "url": "https://kubernetes.io/docs/concepts/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l1",
      "realWorldContext": "CrashLoopBackOff, Pending và ImagePullBackOff là sự cố Kubernetes kinh điển; cần đọc describe/logs/events trước khi sửa manifest. Ngày này gắn với artifact: Lưu deployment.yaml, rollout evidence, workload-runbook.md.",
      "guidedTask": "Deploy Nginx/hello app with 3 replicas; inspect get, describe, logs; change image and observe rollout history.",
      "debugTask": "Roll back one bad image rollout; explain why Pods are not deployed directly for app lifecycle.",
      "evidenceTask": "Lưu deployment.yaml, rollout evidence, workload-runbook.md."
    },
    "reviewQuestionIds": [
      "p4l1q1",
      "p4l1q2",
      "p4l1q3",
      "p4l1q4",
      "p4l1q5",
      "p4l1q6"
    ]
  },
  {
    "id": "d087",
    "dayNumber": 87,
    "week": 13,
    "dayOfWeek": "Wed",
    "phaseId": "p4",
    "title": "Service ClusterIP/NodePort/LoadBalancer, DNS, Ingress concept and endpoint selection",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Service ClusterIP/NodePort/LoadBalancer, DNS, Ingress concept and endpoint selection. Phần lab biến kiến thức thành thao tác kiểm chứng được: Expose app with ClusterIP/NodePort; curl from cluster/host; inspect endpoints and labels when service has none. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Service ClusterIP/NodePort/LoadBalancer, DNS, Ingress concept and endpoint selection.",
        "Lab: Expose app with ClusterIP/NodePort; curl from cluster/host; inspect endpoints and labels when service has none.",
        "Debug/review: Fix selector mismatch scenario and verify endpoints are populated.",
        "Evidence: Lưu service.yaml, service-debug.md."
      ],
      "sources": [
        {
          "title": "Kubernetes concepts",
          "org": "Kubernetes Docs",
          "url": "https://kubernetes.io/docs/concepts/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l1",
      "realWorldContext": "CrashLoopBackOff, Pending và ImagePullBackOff là sự cố Kubernetes kinh điển; cần đọc describe/logs/events trước khi sửa manifest. Ngày này gắn với artifact: Lưu service.yaml, service-debug.md.",
      "guidedTask": "Expose app with ClusterIP/NodePort; curl from cluster/host; inspect endpoints and labels when service has none.",
      "debugTask": "Fix selector mismatch scenario and verify endpoints are populated.",
      "evidenceTask": "Lưu service.yaml, service-debug.md."
    },
    "reviewQuestionIds": [
      "p4l1q1",
      "p4l1q2",
      "p4l1q3",
      "p4l1q4",
      "p4l1q5",
      "p4l1q6"
    ]
  },
  {
    "id": "d088",
    "dayNumber": 88,
    "week": 13,
    "dayOfWeek": "Thu",
    "phaseId": "p4",
    "title": "ConfigMap vs Secret, env/volume injection, base64 caveat and config reload decisions",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào ConfigMap vs Secret, env/volume injection, base64 caveat and config reload decisions. Phần lab biến kiến thức thành thao tác kiểm chứng được: Inject nonsecret config from ConfigMap and placeholder secret into Pod; inspect safely without committing real values. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: ConfigMap vs Secret, env/volume injection, base64 caveat and config reload decisions.",
        "Lab: Inject nonsecret config from ConfigMap and placeholder secret into Pod; inspect safely without committing real values.",
        "Debug/review: Change ConfigMap then explain why Pod restart/reload may be needed.",
        "Evidence: Lưu manifests, .example secret pattern, config-management.md."
      ],
      "sources": [
        {
          "title": "Kubernetes concepts",
          "org": "Kubernetes Docs",
          "url": "https://kubernetes.io/docs/concepts/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l1",
      "realWorldContext": "CrashLoopBackOff, Pending và ImagePullBackOff là sự cố Kubernetes kinh điển; cần đọc describe/logs/events trước khi sửa manifest. Ngày này gắn với artifact: Lưu manifests, .example secret pattern, config-management.md.",
      "guidedTask": "Inject nonsecret config from ConfigMap and placeholder secret into Pod; inspect safely without committing real values.",
      "debugTask": "Change ConfigMap then explain why Pod restart/reload may be needed.",
      "evidenceTask": "Lưu manifests, .example secret pattern, config-management.md."
    },
    "reviewQuestionIds": [
      "p4l1q1",
      "p4l1q2",
      "p4l1q3",
      "p4l1q4",
      "p4l1q5",
      "p4l1q6"
    ]
  },
  {
    "id": "d089",
    "dayNumber": 89,
    "week": 13,
    "dayOfWeek": "Fri",
    "phaseId": "p4",
    "title": "Requests/limits, QoS, namespace, ResourceQuota, LimitRange and OOM/CPU throttling signals",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Requests/limits, QoS, namespace, ResourceQuota, LimitRange and OOM/CPU throttling signals. Phần lab biến kiến thức thành thao tác kiểm chứng được: Apply resource requests/limits; create a constrained namespace; inspect Pod spec/events and avoid host exhaustion. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Requests/limits, QoS, namespace, ResourceQuota, LimitRange and OOM/CPU throttling signals.",
        "Lab: Apply resource requests/limits; create a constrained namespace; inspect Pod spec/events and avoid host exhaustion.",
        "Debug/review: Write capacity estimate for 3 replicas and identify what metric validates it.",
        "Evidence: Lưu resources.yaml, capacity-note.md."
      ],
      "sources": [
        {
          "title": "Kubernetes concepts",
          "org": "Kubernetes Docs",
          "url": "https://kubernetes.io/docs/concepts/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l1",
      "realWorldContext": "CrashLoopBackOff, Pending và ImagePullBackOff là sự cố Kubernetes kinh điển; cần đọc describe/logs/events trước khi sửa manifest. Ngày này gắn với artifact: Lưu resources.yaml, capacity-note.md.",
      "guidedTask": "Apply resource requests/limits; create a constrained namespace; inspect Pod spec/events and avoid host exhaustion.",
      "debugTask": "Write capacity estimate for 3 replicas and identify what metric validates it.",
      "evidenceTask": "Lưu resources.yaml, capacity-note.md."
    },
    "reviewQuestionIds": [
      "p4l1q1",
      "p4l1q2",
      "p4l1q3",
      "p4l1q4",
      "p4l1q5",
      "p4l1q6"
    ]
  },
  {
    "id": "d090",
    "dayNumber": 90,
    "week": 13,
    "dayOfWeek": "Sat",
    "phaseId": "p4",
    "title": "kubectl operational toolbox: get, describe, logs, exec, rollout, events, top, apply/delete/diff",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào kubectl operational toolbox: get, describe, logs, exec, rollout, events, top, apply/delete/diff. Phần lab biến kiến thức thành thao tác kiểm chứng được: Complete 30-command checklist against local cluster; use each command for a specific question, not memorization. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: kubectl operational toolbox: get, describe, logs, exec, rollout, events, top, apply/delete/diff.",
        "Lab: Complete 30-command checklist against local cluster; use each command for a specific question, not memorization.",
        "Debug/review: Solve one crash loop by reading describe/logs before modifying manifest.",
        "Evidence: Lưu kubectl-cheatsheet-by-question.md."
      ],
      "sources": [
        {
          "title": "Kubernetes concepts",
          "org": "Kubernetes Docs",
          "url": "https://kubernetes.io/docs/concepts/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l1",
      "realWorldContext": "CrashLoopBackOff, Pending và ImagePullBackOff là sự cố Kubernetes kinh điển; cần đọc describe/logs/events trước khi sửa manifest. Ngày này gắn với artifact: Lưu kubectl-cheatsheet-by-question.md.",
      "guidedTask": "Complete 30-command checklist against local cluster; use each command for a specific question, not memorization.",
      "debugTask": "Solve one crash loop by reading describe/logs before modifying manifest.",
      "evidenceTask": "Lưu kubectl-cheatsheet-by-question.md."
    },
    "reviewQuestionIds": [
      "p4l1q1",
      "p4l1q2",
      "p4l1q3",
      "p4l1q4",
      "p4l1q5",
      "p4l1q6"
    ]
  },
  {
    "id": "d091",
    "dayNumber": 91,
    "week": 13,
    "dayOfWeek": "Sun",
    "phaseId": "p4",
    "title": "Week review: delivery flow app → Deployment → Pod → Service",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Week review: delivery flow app → Deployment → Pod → Service. Phần lab biến kiến thức thành thao tác kiểm chứng được: From clean namespace deploy app, configure it, expose it, inject one failure and recover via rollout/manifest. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Week review: delivery flow app → Deployment → Pod → Service.",
        "Lab: From clean namespace deploy app, configure it, expose it, inject one failure and recover via rollout/manifest.",
        "Debug/review: Write README with prerequisites, apply, verify, troubleshoot, delete namespace.",
        "Evidence: Lưu week13-retro.md; commit/push."
      ],
      "sources": [
        {
          "title": "Kubernetes concepts",
          "org": "Kubernetes Docs",
          "url": "https://kubernetes.io/docs/concepts/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l1",
      "realWorldContext": "CrashLoopBackOff, Pending và ImagePullBackOff là sự cố Kubernetes kinh điển; cần đọc describe/logs/events trước khi sửa manifest. Ngày này gắn với artifact: Lưu week13-retro.md; commit/push.",
      "guidedTask": "From clean namespace deploy app, configure it, expose it, inject one failure and recover via rollout/manifest.",
      "debugTask": "Write README with prerequisites, apply, verify, troubleshoot, delete namespace.",
      "evidenceTask": "Lưu week13-retro.md; commit/push."
    },
    "reviewQuestionIds": [
      "p4l1q1",
      "p4l1q2",
      "p4l1q3",
      "p4l1q4",
      "p4l1q5",
      "p4l1q6"
    ]
  },
  {
    "id": "d092",
    "dayNumber": 92,
    "week": 14,
    "dayOfWeek": "Mon",
    "phaseId": "p4",
    "title": "Volume, PV, PVC, StorageClass, access mode, reclaim policy and stateful data risks",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Volume, PV, PVC, StorageClass, access mode, reclaim policy and stateful data risks. Phần lab biến kiến thức thành thao tác kiểm chứng được: Deploy PostgreSQL/demo app with PVC local; write data, restart Pod, verify persistence; then delete controlled test namespace. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Volume, PV, PVC, StorageClass, access mode, reclaim policy and stateful data risks.",
        "Lab: Deploy PostgreSQL/demo app with PVC local; write data, restart Pod, verify persistence; then delete controlled test namespace.",
        "Debug/review: Explain why backup/restore still needed even with PVC.",
        "Evidence: Lưu storage-lab.md, manifest, teardown note."
      ],
      "sources": [
        {
          "title": "Kubernetes configuration and secrets",
          "org": "Kubernetes Docs",
          "url": "https://kubernetes.io/docs/concepts/configuration/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l3",
      "realWorldContext": "ConfigMap, Secret, probe và resource limit quyết định workload có tự phục hồi hay che giấu lỗi; secret hygiene là điều bắt buộc. Ngày này gắn với artifact: Lưu storage-lab.md, manifest, teardown note.",
      "guidedTask": "Deploy PostgreSQL/demo app with PVC local; write data, restart Pod, verify persistence; then delete controlled test namespace.",
      "debugTask": "Explain why backup/restore still needed even with PVC.",
      "evidenceTask": "Lưu storage-lab.md, manifest, teardown note."
    },
    "reviewQuestionIds": [
      "p4l3q1",
      "p4l3q2",
      "p4l3q3",
      "p4l3q4",
      "p4l3q5",
      "p4l3q6"
    ]
  },
  {
    "id": "d093",
    "dayNumber": 93,
    "week": 14,
    "dayOfWeek": "Tue",
    "phaseId": "p4",
    "title": "StatefulSet, stable identity, headless service, ordered rollout and when not to run DB in cluster",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào StatefulSet, stable identity, headless service, ordered rollout and when not to run DB in cluster. Phần lab biến kiến thức thành thao tác kiểm chứng được: Deploy small Redis/StatefulSet or inspect manifest; observe pod names/volume identity and scale safely. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: StatefulSet, stable identity, headless service, ordered rollout and when not to run DB in cluster.",
        "Lab: Deploy small Redis/StatefulSet or inspect manifest; observe pod names/volume identity and scale safely.",
        "Debug/review: Compare StatefulSet vs Deployment for database workload and state migration risk.",
        "Evidence: Lưu stateful-workloads.md."
      ],
      "sources": [
        {
          "title": "Kubernetes configuration and secrets",
          "org": "Kubernetes Docs",
          "url": "https://kubernetes.io/docs/concepts/configuration/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l3",
      "realWorldContext": "ConfigMap, Secret, probe và resource limit quyết định workload có tự phục hồi hay che giấu lỗi; secret hygiene là điều bắt buộc. Ngày này gắn với artifact: Lưu stateful-workloads.md.",
      "guidedTask": "Deploy small Redis/StatefulSet or inspect manifest; observe pod names/volume identity and scale safely.",
      "debugTask": "Compare StatefulSet vs Deployment for database workload and state migration risk.",
      "evidenceTask": "Lưu stateful-workloads.md."
    },
    "reviewQuestionIds": [
      "p4l3q1",
      "p4l3q2",
      "p4l3q3",
      "p4l3q4",
      "p4l3q5",
      "p4l3q6"
    ]
  },
  {
    "id": "d094",
    "dayNumber": 94,
    "week": 14,
    "dayOfWeek": "Wed",
    "phaseId": "p4",
    "title": "RBAC: ServiceAccount, Role/ClusterRole, RoleBinding, namespace scope and least privilege",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào RBAC: ServiceAccount, Role/ClusterRole, RoleBinding, namespace scope and least privilege. Phần lab biến kiến thức thành thao tác kiểm chứng được: Create service account with only list/get configmaps in lab namespace; run kubectl auth can-i positive/negative tests. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: RBAC: ServiceAccount, Role/ClusterRole, RoleBinding, namespace scope and least privilege.",
        "Lab: Create service account with only list/get configmaps in lab namespace; run kubectl auth can-i positive/negative tests.",
        "Debug/review: Identify 3 dangerous broad permissions and replace with scoped alternative.",
        "Evidence: Lưu rbac.yaml, rbac-tests.md."
      ],
      "sources": [
        {
          "title": "Kubernetes configuration and secrets",
          "org": "Kubernetes Docs",
          "url": "https://kubernetes.io/docs/concepts/configuration/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l3",
      "realWorldContext": "ConfigMap, Secret, probe và resource limit quyết định workload có tự phục hồi hay che giấu lỗi; secret hygiene là điều bắt buộc. Ngày này gắn với artifact: Lưu rbac.yaml, rbac-tests.md.",
      "guidedTask": "Create service account with only list/get configmaps in lab namespace; run kubectl auth can-i positive/negative tests.",
      "debugTask": "Identify 3 dangerous broad permissions and replace with scoped alternative.",
      "evidenceTask": "Lưu rbac.yaml, rbac-tests.md."
    },
    "reviewQuestionIds": [
      "p4l3q1",
      "p4l3q2",
      "p4l3q3",
      "p4l3q4",
      "p4l3q5",
      "p4l3q6"
    ]
  },
  {
    "id": "d095",
    "dayNumber": 95,
    "week": 14,
    "dayOfWeek": "Thu",
    "phaseId": "p4",
    "title": "NetworkPolicy, ingress/egress, default deny, CNI limitation and application dependency map",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào NetworkPolicy, ingress/egress, default deny, CNI limitation and application dependency map. Phần lab biến kiến thức thành thao tác kiểm chứng được: Design/apply policy allowing frontend → API → DB in compatible local cluster or YAML dry-run; test allowed/blocked flows. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: NetworkPolicy, ingress/egress, default deny, CNI limitation and application dependency map.",
        "Lab: Design/apply policy allowing frontend → API → DB in compatible local cluster or YAML dry-run; test allowed/blocked flows.",
        "Debug/review: Draw data flow and list DNS/metrics exceptions required before enforcement.",
        "Evidence: Lưu network-policy.md, manifests."
      ],
      "sources": [
        {
          "title": "Kubernetes configuration and secrets",
          "org": "Kubernetes Docs",
          "url": "https://kubernetes.io/docs/concepts/configuration/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l3",
      "realWorldContext": "ConfigMap, Secret, probe và resource limit quyết định workload có tự phục hồi hay che giấu lỗi; secret hygiene là điều bắt buộc. Ngày này gắn với artifact: Lưu network-policy.md, manifests.",
      "guidedTask": "Design/apply policy allowing frontend → API → DB in compatible local cluster or YAML dry-run; test allowed/blocked flows.",
      "debugTask": "Draw data flow and list DNS/metrics exceptions required before enforcement.",
      "evidenceTask": "Lưu network-policy.md, manifests."
    },
    "reviewQuestionIds": [
      "p4l3q1",
      "p4l3q2",
      "p4l3q3",
      "p4l3q4",
      "p4l3q5",
      "p4l3q6"
    ]
  },
  {
    "id": "d096",
    "dayNumber": 96,
    "week": 14,
    "dayOfWeek": "Fri",
    "phaseId": "p4",
    "title": "HPA, metrics-server, request dependency, scaling signals and noisy scaling trade-off",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào HPA, metrics-server, request dependency, scaling signals and noisy scaling trade-off. Phần lab biến kiến thức thành thao tác kiểm chứng được: Configure HPA for a test deployment or calculate expected behavior from manifests; generate/load mock requests if safe. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: HPA, metrics-server, request dependency, scaling signals and noisy scaling trade-off.",
        "Lab: Configure HPA for a test deployment or calculate expected behavior from manifests; generate/load mock requests if safe.",
        "Debug/review: Write policy: min/max replicas, metric, cooldown, capacity prerequisite and rollback.",
        "Evidence: Lưu autoscaling-design.md."
      ],
      "sources": [
        {
          "title": "Kubernetes configuration and secrets",
          "org": "Kubernetes Docs",
          "url": "https://kubernetes.io/docs/concepts/configuration/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l3",
      "realWorldContext": "ConfigMap, Secret, probe và resource limit quyết định workload có tự phục hồi hay che giấu lỗi; secret hygiene là điều bắt buộc. Ngày này gắn với artifact: Lưu autoscaling-design.md.",
      "guidedTask": "Configure HPA for a test deployment or calculate expected behavior from manifests; generate/load mock requests if safe.",
      "debugTask": "Write policy: min/max replicas, metric, cooldown, capacity prerequisite and rollback.",
      "evidenceTask": "Lưu autoscaling-design.md."
    },
    "reviewQuestionIds": [
      "p4l3q1",
      "p4l3q2",
      "p4l3q3",
      "p4l3q4",
      "p4l3q5",
      "p4l3q6"
    ]
  },
  {
    "id": "d097",
    "dayNumber": 97,
    "week": 14,
    "dayOfWeek": "Sat",
    "phaseId": "p4",
    "title": "Prometheus/Grafana architecture, scrape target, exporter, dashboard, alert and cardinality",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Prometheus/Grafana architecture, scrape target, exporter, dashboard, alert and cardinality. Phần lab biến kiến thức thành thao tác kiểm chứng được: Install kube-prometheus-stack local only if resources allow, or use sample metrics; inspect targets and one dashboard panel. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Prometheus/Grafana architecture, scrape target, exporter, dashboard, alert and cardinality.",
        "Lab: Install kube-prometheus-stack local only if resources allow, or use sample metrics; inspect targets and one dashboard panel.",
        "Debug/review: Define alert PodCrashLooping/availability with runbook link and test signal source.",
        "Evidence: Lưu k8s-monitoring-runbook.md."
      ],
      "sources": [
        {
          "title": "Kubernetes configuration and secrets",
          "org": "Kubernetes Docs",
          "url": "https://kubernetes.io/docs/concepts/configuration/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l3",
      "realWorldContext": "ConfigMap, Secret, probe và resource limit quyết định workload có tự phục hồi hay che giấu lỗi; secret hygiene là điều bắt buộc. Ngày này gắn với artifact: Lưu k8s-monitoring-runbook.md.",
      "guidedTask": "Install kube-prometheus-stack local only if resources allow, or use sample metrics; inspect targets and one dashboard panel.",
      "debugTask": "Define alert PodCrashLooping/availability with runbook link and test signal source.",
      "evidenceTask": "Lưu k8s-monitoring-runbook.md."
    },
    "reviewQuestionIds": [
      "p4l3q1",
      "p4l3q2",
      "p4l3q3",
      "p4l3q4",
      "p4l3q5",
      "p4l3q6"
    ]
  },
  {
    "id": "d098",
    "dayNumber": 98,
    "week": 14,
    "dayOfWeek": "Sun",
    "phaseId": "p4",
    "title": "Review: production-like cluster needs state, access, network and observability jointly",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Review: production-like cluster needs state, access, network and observability jointly. Phần lab biến kiến thức thành thao tác kiểm chứng được: Tabletop incident: Pending Pod then CrashLoop then unauthorized API; use describe/events/log/auth check order. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Review: production-like cluster needs state, access, network and observability jointly.",
        "Lab: Tabletop incident: Pending Pod then CrashLoop then unauthorized API; use describe/events/log/auth check order.",
        "Debug/review: Write incident report and one preventive control per failure.",
        "Evidence: Lưu week14-retro.md; commit/push."
      ],
      "sources": [
        {
          "title": "Kubernetes configuration and secrets",
          "org": "Kubernetes Docs",
          "url": "https://kubernetes.io/docs/concepts/configuration/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l3",
      "realWorldContext": "ConfigMap, Secret, probe và resource limit quyết định workload có tự phục hồi hay che giấu lỗi; secret hygiene là điều bắt buộc. Ngày này gắn với artifact: Lưu week14-retro.md; commit/push.",
      "guidedTask": "Tabletop incident: Pending Pod then CrashLoop then unauthorized API; use describe/events/log/auth check order.",
      "debugTask": "Write incident report and one preventive control per failure.",
      "evidenceTask": "Lưu week14-retro.md; commit/push."
    },
    "reviewQuestionIds": [
      "p4l3q1",
      "p4l3q2",
      "p4l3q3",
      "p4l3q4",
      "p4l3q5",
      "p4l3q6"
    ]
  },
  {
    "id": "d099",
    "dayNumber": 99,
    "week": 15,
    "dayOfWeek": "Mon",
    "phaseId": "p4",
    "title": "Helm chart, template, values, release, repo, upgrade/rollback and rendered-manifest review",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Helm chart, template, values, release, repo, upgrade/rollback and rendered-manifest review. Phần lab biến kiến thức thành thao tác kiểm chứng được: Install a known chart or create chart skeleton; use helm template and inspect generated YAML before install. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Helm chart, template, values, release, repo, upgrade/rollback and rendered-manifest review.",
        "Lab: Install a known chart or create chart skeleton; use helm template and inspect generated YAML before install.",
        "Debug/review: Change value image replica count; verify output changed only as expected.",
        "Evidence: Lưu helm-basics.md, values example."
      ],
      "sources": [
        {
          "title": "Helm documentation",
          "org": "Helm",
          "url": "https://helm.sh/docs/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l4",
      "realWorldContext": "Helm/GitOps/EKS dùng trong môi trường team; giá trị nằm ở rollout có kiểm soát, rollback và quan sát release chứ không chỉ apply YAML. Ngày này gắn với artifact: Lưu helm-basics.md, values example.",
      "guidedTask": "Install a known chart or create chart skeleton; use helm template and inspect generated YAML before install.",
      "debugTask": "Change value image replica count; verify output changed only as expected.",
      "evidenceTask": "Lưu helm-basics.md, values example."
    },
    "reviewQuestionIds": [
      "p4l4q1",
      "p4l4q2",
      "p4l4q3",
      "p4l4q4",
      "p4l4q5",
      "p4l4q6"
    ]
  },
  {
    "id": "d100",
    "dayNumber": 100,
    "week": 15,
    "dayOfWeek": "Tue",
    "phaseId": "p4",
    "title": "Custom chart structure: Chart.yaml, templates, helpers, values schema and environment overrides",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Custom chart structure: Chart.yaml, templates, helpers, values schema and environment overrides. Phần lab biến kiến thức thành thao tác kiểm chứng được: Package existing app Deployment/Service/Ingress into chart; use dev/prod values without secrets. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Custom chart structure: Chart.yaml, templates, helpers, values schema and environment overrides.",
        "Lab: Package existing app Deployment/Service/Ingress into chart; use dev/prod values without secrets.",
        "Debug/review: Install in namespace, test health, run helm lint if available.",
        "Evidence: Lưu charts/app/, README install/upgrade/uninstall."
      ],
      "sources": [
        {
          "title": "Helm documentation",
          "org": "Helm",
          "url": "https://helm.sh/docs/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l4",
      "realWorldContext": "Helm/GitOps/EKS dùng trong môi trường team; giá trị nằm ở rollout có kiểm soát, rollback và quan sát release chứ không chỉ apply YAML. Ngày này gắn với artifact: Lưu charts/app/, README install/upgrade/uninstall.",
      "guidedTask": "Package existing app Deployment/Service/Ingress into chart; use dev/prod values without secrets.",
      "debugTask": "Install in namespace, test health, run helm lint if available.",
      "evidenceTask": "Lưu charts/app/, README install/upgrade/uninstall."
    },
    "reviewQuestionIds": [
      "p4l4q1",
      "p4l4q2",
      "p4l4q3",
      "p4l4q4",
      "p4l4q5",
      "p4l4q6"
    ]
  },
  {
    "id": "d101",
    "dayNumber": 101,
    "week": 15,
    "dayOfWeek": "Wed",
    "phaseId": "p4",
    "title": "Rolling update, readiness, maxSurge/maxUnavailable, rollback and version traceability",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Rolling update, readiness, maxSurge/maxUnavailable, rollback and version traceability. Phần lab biến kiến thức thành thao tác kiểm chứng được: Deploy v1 then v2; inject readiness/image fault; observe rollout status and rollback to known-good release. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Rolling update, readiness, maxSurge/maxUnavailable, rollback and version traceability.",
        "Lab: Deploy v1 then v2; inject readiness/image fault; observe rollout status and rollback to known-good release.",
        "Debug/review: Record duration, verification command and rollback evidence.",
        "Evidence: Lưu rolling-update-runbook.md."
      ],
      "sources": [
        {
          "title": "Helm documentation",
          "org": "Helm",
          "url": "https://helm.sh/docs/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l4",
      "realWorldContext": "Helm/GitOps/EKS dùng trong môi trường team; giá trị nằm ở rollout có kiểm soát, rollback và quan sát release chứ không chỉ apply YAML. Ngày này gắn với artifact: Lưu rolling-update-runbook.md.",
      "guidedTask": "Deploy v1 then v2; inject readiness/image fault; observe rollout status and rollback to known-good release.",
      "debugTask": "Record duration, verification command and rollback evidence.",
      "evidenceTask": "Lưu rolling-update-runbook.md."
    },
    "reviewQuestionIds": [
      "p4l4q1",
      "p4l4q2",
      "p4l4q3",
      "p4l4q4",
      "p4l4q5",
      "p4l4q6"
    ]
  },
  {
    "id": "d102",
    "dayNumber": 102,
    "week": 15,
    "dayOfWeek": "Thu",
    "phaseId": "p4",
    "title": "Canary deployment: traffic split, metric-based promotion, abort threshold and limitations",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Canary deployment: traffic split, metric-based promotion, abort threshold and limitations. Phần lab biến kiến thức thành thao tác kiểm chứng được: Model canary 10%/90% with labels/Ingress/service or documented simulation; define success/error/latency criteria. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Canary deployment: traffic split, metric-based promotion, abort threshold and limitations.",
        "Lab: Model canary 10%/90% with labels/Ingress/service or documented simulation; define success/error/latency criteria.",
        "Debug/review: Write decision table promote/hold/rollback based on metrics.",
        "Evidence: Lưu canary-strategy.md."
      ],
      "sources": [
        {
          "title": "Helm documentation",
          "org": "Helm",
          "url": "https://helm.sh/docs/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l4",
      "realWorldContext": "Helm/GitOps/EKS dùng trong môi trường team; giá trị nằm ở rollout có kiểm soát, rollback và quan sát release chứ không chỉ apply YAML. Ngày này gắn với artifact: Lưu canary-strategy.md.",
      "guidedTask": "Model canary 10%/90% with labels/Ingress/service or documented simulation; define success/error/latency criteria.",
      "debugTask": "Write decision table promote/hold/rollback based on metrics.",
      "evidenceTask": "Lưu canary-strategy.md."
    },
    "reviewQuestionIds": [
      "p4l4q1",
      "p4l4q2",
      "p4l4q3",
      "p4l4q4",
      "p4l4q5",
      "p4l4q6"
    ]
  },
  {
    "id": "d103",
    "dayNumber": 103,
    "week": 15,
    "dayOfWeek": "Fri",
    "phaseId": "p4",
    "title": "Blue-green deployment: parallel environments, switch, database compatibility and fast rollback",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Blue-green deployment: parallel environments, switch, database compatibility and fast rollback. Phần lab biến kiến thức thành thao tác kiểm chứng được: Model two versions and switch service selector; test switch/rollback in local cluster. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Blue-green deployment: parallel environments, switch, database compatibility and fast rollback.",
        "Lab: Model two versions and switch service selector; test switch/rollback in local cluster.",
        "Debug/review: Compare rolling/canary/blue-green by risk, cost, complexity and DB migration compatibility.",
        "Evidence: Lưu deployment-patterns-comparison.md."
      ],
      "sources": [
        {
          "title": "Helm documentation",
          "org": "Helm",
          "url": "https://helm.sh/docs/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l4",
      "realWorldContext": "Helm/GitOps/EKS dùng trong môi trường team; giá trị nằm ở rollout có kiểm soát, rollback và quan sát release chứ không chỉ apply YAML. Ngày này gắn với artifact: Lưu deployment-patterns-comparison.md.",
      "guidedTask": "Model two versions and switch service selector; test switch/rollback in local cluster.",
      "debugTask": "Compare rolling/canary/blue-green by risk, cost, complexity and DB migration compatibility.",
      "evidenceTask": "Lưu deployment-patterns-comparison.md."
    },
    "reviewQuestionIds": [
      "p4l4q1",
      "p4l4q2",
      "p4l4q3",
      "p4l4q4",
      "p4l4q5",
      "p4l4q6"
    ]
  },
  {
    "id": "d104",
    "dayNumber": 104,
    "week": 15,
    "dayOfWeek": "Sat",
    "phaseId": "p4",
    "title": "GitOps principles, desired state, reconciliation, Argo CD Application, sync status and drift",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào GitOps principles, desired state, reconciliation, Argo CD Application, sync status and drift. Phần lab biến kiến thức thành thao tác kiểm chứng được: Install/read Argo CD local if resources allow or create Application manifest; simulate Git change → desired state plan. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: GitOps principles, desired state, reconciliation, Argo CD Application, sync status and drift.",
        "Lab: Install/read Argo CD local if resources allow or create Application manifest; simulate Git change → desired state plan.",
        "Debug/review: Write boundaries: who merges, who syncs, where secrets live, how to stop bad sync.",
        "Evidence: Lưu gitops-operating-model.md."
      ],
      "sources": [
        {
          "title": "Helm documentation",
          "org": "Helm",
          "url": "https://helm.sh/docs/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l4",
      "realWorldContext": "Helm/GitOps/EKS dùng trong môi trường team; giá trị nằm ở rollout có kiểm soát, rollback và quan sát release chứ không chỉ apply YAML. Ngày này gắn với artifact: Lưu gitops-operating-model.md.",
      "guidedTask": "Install/read Argo CD local if resources allow or create Application manifest; simulate Git change → desired state plan.",
      "debugTask": "Write boundaries: who merges, who syncs, where secrets live, how to stop bad sync.",
      "evidenceTask": "Lưu gitops-operating-model.md."
    },
    "reviewQuestionIds": [
      "p4l4q1",
      "p4l4q2",
      "p4l4q3",
      "p4l4q4",
      "p4l4q5",
      "p4l4q6"
    ]
  },
  {
    "id": "d105",
    "dayNumber": 105,
    "week": 15,
    "dayOfWeek": "Sun",
    "phaseId": "p4",
    "title": "Review Helm/GitOps through a controlled change",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Review Helm/GitOps through a controlled change. Phần lab biến kiến thức thành thao tác kiểm chứng được: Make a PR-style change image tag + values, render/review, deploy to dev, test and rollback. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Review Helm/GitOps through a controlled change.",
        "Lab: Make a PR-style change image tag + values, render/review, deploy to dev, test and rollback.",
        "Debug/review: Document audit trail links/commit/release version and unanswered risk.",
        "Evidence: Lưu week15-retro.md; commit/push."
      ],
      "sources": [
        {
          "title": "Helm documentation",
          "org": "Helm",
          "url": "https://helm.sh/docs/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l4",
      "realWorldContext": "Helm/GitOps/EKS dùng trong môi trường team; giá trị nằm ở rollout có kiểm soát, rollback và quan sát release chứ không chỉ apply YAML. Ngày này gắn với artifact: Lưu week15-retro.md; commit/push.",
      "guidedTask": "Make a PR-style change image tag + values, render/review, deploy to dev, test and rollback.",
      "debugTask": "Document audit trail links/commit/release version and unanswered risk.",
      "evidenceTask": "Lưu week15-retro.md; commit/push."
    },
    "reviewQuestionIds": [
      "p4l4q1",
      "p4l4q2",
      "p4l4q3",
      "p4l4q4",
      "p4l4q5",
      "p4l4q6"
    ]
  },
  {
    "id": "d106",
    "dayNumber": 106,
    "week": 16,
    "dayOfWeek": "Mon",
    "phaseId": "p4",
    "title": "EKS architecture, control plane cost, managed node groups, eksctl vs Terraform, cluster baseline",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào EKS architecture, control plane cost, managed node groups, eksctl vs Terraform, cluster baseline. Phần lab biến kiến thức thành thao tác kiểm chứng được: Write EKS creation plan/dry-run with region, version, node count, tags, estimate and deletion command; use local kind if no budget. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: EKS architecture, control plane cost, managed node groups, eksctl vs Terraform, cluster baseline.",
        "Lab: Write EKS creation plan/dry-run with region, version, node count, tags, estimate and deletion command; use local kind if no budget.",
        "Debug/review: Decide go/no-go using budget, demo scope and teardown owner.",
        "Evidence: Lưu eks-cost-and-creation-plan.md."
      ],
      "sources": [
        {
          "title": "Helm documentation",
          "org": "Helm",
          "url": "https://helm.sh/docs/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l4",
      "realWorldContext": "Helm/GitOps/EKS dùng trong môi trường team; giá trị nằm ở rollout có kiểm soát, rollback và quan sát release chứ không chỉ apply YAML. Ngày này gắn với artifact: Lưu eks-cost-and-creation-plan.md.",
      "guidedTask": "Write EKS creation plan/dry-run with region, version, node count, tags, estimate and deletion command; use local kind if no budget.",
      "debugTask": "Decide go/no-go using budget, demo scope and teardown owner.",
      "evidenceTask": "Lưu eks-cost-and-creation-plan.md."
    },
    "reviewQuestionIds": [
      "p4l4q1",
      "p4l4q2",
      "p4l4q3",
      "p4l4q4",
      "p4l4q5",
      "p4l4q6"
    ]
  },
  {
    "id": "d107",
    "dayNumber": 107,
    "week": 16,
    "dayOfWeek": "Tue",
    "phaseId": "p4",
    "title": "EKS IAM/IRSA, node role, AWS Load Balancer Controller concept and trust boundaries",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào EKS IAM/IRSA, node role, AWS Load Balancer Controller concept and trust boundaries. Phần lab biến kiến thức thành thao tác kiểm chứng được: Map required IAM roles/policies for cluster/node/service account; review sample IRSA trust policy. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: EKS IAM/IRSA, node role, AWS Load Balancer Controller concept and trust boundaries.",
        "Lab: Map required IAM roles/policies for cluster/node/service account; review sample IRSA trust policy.",
        "Debug/review: Explain why node role should not give every pod AWS admin.",
        "Evidence: Lưu eks-iam-boundaries.md."
      ],
      "sources": [
        {
          "title": "Helm documentation",
          "org": "Helm",
          "url": "https://helm.sh/docs/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l4",
      "realWorldContext": "Helm/GitOps/EKS dùng trong môi trường team; giá trị nằm ở rollout có kiểm soát, rollback và quan sát release chứ không chỉ apply YAML. Ngày này gắn với artifact: Lưu eks-iam-boundaries.md.",
      "guidedTask": "Map required IAM roles/policies for cluster/node/service account; review sample IRSA trust policy.",
      "debugTask": "Explain why node role should not give every pod AWS admin.",
      "evidenceTask": "Lưu eks-iam-boundaries.md."
    },
    "reviewQuestionIds": [
      "p4l4q1",
      "p4l4q2",
      "p4l4q3",
      "p4l4q4",
      "p4l4q5",
      "p4l4q6"
    ]
  },
  {
    "id": "d108",
    "dayNumber": 108,
    "week": 16,
    "dayOfWeek": "Wed",
    "phaseId": "p4",
    "title": "Port local manifests to cloud constraints: ingress, storage, DNS, image registry and observability",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Port local manifests to cloud constraints: ingress, storage, DNS, image registry and observability. Phần lab biến kiến thức thành thao tác kiểm chứng được: Run app locally and build EKS deployment checklist; test image/Helm values/namespace/health readiness. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Port local manifests to cloud constraints: ingress, storage, DNS, image registry and observability.",
        "Lab: Run app locally and build EKS deployment checklist; test image/Helm values/namespace/health readiness.",
        "Debug/review: If EKS created, deploy time-boxed and collect evidence; otherwise mark output as local validation.",
        "Evidence: Lưu eks-deploy-checklist.md."
      ],
      "sources": [
        {
          "title": "Helm documentation",
          "org": "Helm",
          "url": "https://helm.sh/docs/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l4",
      "realWorldContext": "Helm/GitOps/EKS dùng trong môi trường team; giá trị nằm ở rollout có kiểm soát, rollback và quan sát release chứ không chỉ apply YAML. Ngày này gắn với artifact: Lưu eks-deploy-checklist.md.",
      "guidedTask": "Run app locally and build EKS deployment checklist; test image/Helm values/namespace/health readiness.",
      "debugTask": "If EKS created, deploy time-boxed and collect evidence; otherwise mark output as local validation.",
      "evidenceTask": "Lưu eks-deploy-checklist.md."
    },
    "reviewQuestionIds": [
      "p4l4q1",
      "p4l4q2",
      "p4l4q3",
      "p4l4q4",
      "p4l4q5",
      "p4l4q6"
    ]
  },
  {
    "id": "d109",
    "dayNumber": 109,
    "week": 16,
    "dayOfWeek": "Thu",
    "phaseId": "p4",
    "title": "Cluster/pod autoscaling, HPA vs Cluster Autoscaler/Karpenter, resource requests and cost behavior",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Cluster/pod autoscaling, HPA vs Cluster Autoscaler/Karpenter, resource requests and cost behavior. Phần lab biến kiến thức thành thao tác kiểm chứng được: Design scale test: traffic, expected HPA, node capacity; simulate in kind or inspect EKS design. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Cluster/pod autoscaling, HPA vs Cluster Autoscaler/Karpenter, resource requests and cost behavior.",
        "Lab: Design scale test: traffic, expected HPA, node capacity; simulate in kind or inspect EKS design.",
        "Debug/review: Write safeguards: max nodes/replicas, alert and stop condition.",
        "Evidence: Lưu eks-scaling-design.md."
      ],
      "sources": [
        {
          "title": "Helm documentation",
          "org": "Helm",
          "url": "https://helm.sh/docs/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l4",
      "realWorldContext": "Helm/GitOps/EKS dùng trong môi trường team; giá trị nằm ở rollout có kiểm soát, rollback và quan sát release chứ không chỉ apply YAML. Ngày này gắn với artifact: Lưu eks-scaling-design.md.",
      "guidedTask": "Design scale test: traffic, expected HPA, node capacity; simulate in kind or inspect EKS design.",
      "debugTask": "Write safeguards: max nodes/replicas, alert and stop condition.",
      "evidenceTask": "Lưu eks-scaling-design.md."
    },
    "reviewQuestionIds": [
      "p4l4q1",
      "p4l4q2",
      "p4l4q3",
      "p4l4q4",
      "p4l4q5",
      "p4l4q6"
    ]
  },
  {
    "id": "d110",
    "dayNumber": 110,
    "week": 16,
    "dayOfWeek": "Fri",
    "phaseId": "p4",
    "title": "Project 3 planning: microservice boundaries, chart, GitOps, SLO and incident scenarios",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Project 3 planning: microservice boundaries, chart, GitOps, SLO and incident scenarios. Phần lab biến kiến thức thành thao tác kiểm chứng được: Create repo/backlog; draw architecture with App, Postgres/Redis decision, Helm, Argo CD, Prometheus/Grafana. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Project 3 planning: microservice boundaries, chart, GitOps, SLO and incident scenarios.",
        "Lab: Create repo/backlog; draw architecture with App, Postgres/Redis decision, Helm, Argo CD, Prometheus/Grafana.",
        "Debug/review: Choose local proof and optional EKS proof; define acceptance tests/release criteria.",
        "Evidence: Lưu PROJECT_3_DESIGN.md."
      ],
      "sources": [
        {
          "title": "Helm documentation",
          "org": "Helm",
          "url": "https://helm.sh/docs/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l4",
      "realWorldContext": "Helm/GitOps/EKS dùng trong môi trường team; giá trị nằm ở rollout có kiểm soát, rollback và quan sát release chứ không chỉ apply YAML. Ngày này gắn với artifact: Lưu PROJECT_3_DESIGN.md.",
      "guidedTask": "Create repo/backlog; draw architecture with App, Postgres/Redis decision, Helm, Argo CD, Prometheus/Grafana.",
      "debugTask": "Choose local proof and optional EKS proof; define acceptance tests/release criteria.",
      "evidenceTask": "Lưu PROJECT_3_DESIGN.md."
    },
    "reviewQuestionIds": [
      "p4l4q1",
      "p4l4q2",
      "p4l4q3",
      "p4l4q4",
      "p4l4q5",
      "p4l4q6"
    ]
  },
  {
    "id": "d111",
    "dayNumber": 111,
    "week": 16,
    "dayOfWeek": "Sat",
    "phaseId": "p4",
    "title": "Project 3 implementation/demo day",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Project 3 implementation/demo day. Phần lab biến kiến thức thành thao tác kiểm chứng được: Deploy app with Helm to local cluster; trigger one failure, inspect dashboard/logs, rollback; optionally EKS with cleanup timer. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Project 3 implementation/demo day.",
        "Lab: Deploy app with Helm to local cluster; trigger one failure, inspect dashboard/logs, rollback; optionally EKS with cleanup timer.",
        "Debug/review: Capture commands and screenshots; check no cluster cloud resources remain unnecessarily.",
        "Evidence: Lưu PROJECT_3_DEMO.md, teardown evidence."
      ],
      "sources": [
        {
          "title": "Helm documentation",
          "org": "Helm",
          "url": "https://helm.sh/docs/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l4",
      "realWorldContext": "Helm/GitOps/EKS dùng trong môi trường team; giá trị nằm ở rollout có kiểm soát, rollback và quan sát release chứ không chỉ apply YAML. Ngày này gắn với artifact: Lưu PROJECT_3_DEMO.md, teardown evidence.",
      "guidedTask": "Deploy app with Helm to local cluster; trigger one failure, inspect dashboard/logs, rollback; optionally EKS with cleanup timer.",
      "debugTask": "Capture commands and screenshots; check no cluster cloud resources remain unnecessarily.",
      "evidenceTask": "Lưu PROJECT_3_DEMO.md, teardown evidence."
    },
    "reviewQuestionIds": [
      "p4l4q1",
      "p4l4q2",
      "p4l4q3",
      "p4l4q4",
      "p4l4q5",
      "p4l4q6"
    ]
  },
  {
    "id": "d112",
    "dayNumber": 112,
    "week": 16,
    "dayOfWeek": "Sun",
    "phaseId": "p4",
    "title": "Month 4 review: Kubernetes troubleshooting narrative and portfolio quality",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Month 4 review: Kubernetes troubleshooting narrative and portfolio quality. Phần lab biến kiến thức thành thao tác kiểm chứng được: Practice interview: CrashLoopBackOff, Pending, Service no endpoint, bad rollout, IAM access; answer with first commands/evidence. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Month 4 review: Kubernetes troubleshooting narrative and portfolio quality.",
        "Lab: Practice interview: CrashLoopBackOff, Pending, Service no endpoint, bad rollout, IAM access; answer with first commands/evidence.",
        "Debug/review: Finalize README, diagram and known limitations; delete local/EKS cluster if not needed.",
        "Evidence: Lưu project-3-retro.md; commit/push."
      ],
      "sources": [
        {
          "title": "Helm documentation",
          "org": "Helm",
          "url": "https://helm.sh/docs/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Kubernetes and Cloud Native Essentials Training",
          "org": "CNCF / Linux Foundation",
          "url": "https://www.youtube.com/watch?v=U05NwXkSWyU",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p4l4",
      "realWorldContext": "Helm/GitOps/EKS dùng trong môi trường team; giá trị nằm ở rollout có kiểm soát, rollback và quan sát release chứ không chỉ apply YAML. Ngày này gắn với artifact: Lưu project-3-retro.md; commit/push.",
      "guidedTask": "Practice interview: CrashLoopBackOff, Pending, Service no endpoint, bad rollout, IAM access; answer with first commands/evidence.",
      "debugTask": "Finalize README, diagram and known limitations; delete local/EKS cluster if not needed.",
      "evidenceTask": "Lưu project-3-retro.md; commit/push."
    },
    "reviewQuestionIds": [
      "p4l4q1",
      "p4l4q2",
      "p4l4q3",
      "p4l4q4",
      "p4l4q5",
      "p4l4q6"
    ]
  },
  {
    "id": "d113",
    "dayNumber": 113,
    "week": 17,
    "dayOfWeek": "Mon",
    "phaseId": "p5",
    "title": "Observability pillars, pull model, Prometheus targets, metric type, labels and cardinality",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Observability pillars, pull model, Prometheus targets, metric type, labels and cardinality. Phần lab biến kiến thức thành thao tác kiểm chứng được: Run Prometheus/node_exporter local or inspect sample endpoint; query up, CPU/disk metrics; identify target down. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Observability pillars, pull model, Prometheus targets, metric type, labels and cardinality.",
        "Lab: Run Prometheus/node_exporter local or inspect sample endpoint; query up, CPU/disk metrics; identify target down.",
        "Debug/review: Design 5 labels/metrics for web app and reject one high-cardinality label.",
        "Evidence: Lưu prometheus-basics.md and query evidence."
      ],
      "sources": [
        {
          "title": "Prometheus documentation",
          "org": "Prometheus",
          "url": "https://prometheus.io/docs/introduction/overview/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l1",
      "realWorldContext": "Monitoring phải trả lời service có khỏe không bằng metric; alert tốt dựa trên SLI/SLO thay vì spam noise. Ngày này gắn với artifact: Lưu prometheus-basics.md and query evidence.",
      "guidedTask": "Run Prometheus/node_exporter local or inspect sample endpoint; query up, CPU/disk metrics; identify target down.",
      "debugTask": "Design 5 labels/metrics for web app and reject one high-cardinality label.",
      "evidenceTask": "Lưu prometheus-basics.md and query evidence."
    },
    "reviewQuestionIds": [
      "p5l1q1",
      "p5l1q2",
      "p5l1q3",
      "p5l1q4",
      "p5l1q5",
      "p5l1q6"
    ]
  },
  {
    "id": "d114",
    "dayNumber": 114,
    "week": 17,
    "dayOfWeek": "Tue",
    "phaseId": "p5",
    "title": "PromQL selectors, rate, aggregation, histogram/latency, recording rules and alert expression",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào PromQL selectors, rate, aggregation, histogram/latency, recording rules and alert expression. Phần lab biến kiến thức thành thao tác kiểm chứng được: Write/test 5 queries: up, CPU, request rate, 5xx ratio concept, p95 latency concept. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: PromQL selectors, rate, aggregation, histogram/latency, recording rules and alert expression.",
        "Lab: Write/test 5 queries: up, CPU, request rate, 5xx ratio concept, p95 latency concept.",
        "Debug/review: Explain which query indicates user impact vs infrastructure symptom.",
        "Evidence: Lưu promql-query-pack.md."
      ],
      "sources": [
        {
          "title": "Prometheus documentation",
          "org": "Prometheus",
          "url": "https://prometheus.io/docs/introduction/overview/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l1",
      "realWorldContext": "Monitoring phải trả lời service có khỏe không bằng metric; alert tốt dựa trên SLI/SLO thay vì spam noise. Ngày này gắn với artifact: Lưu promql-query-pack.md.",
      "guidedTask": "Write/test 5 queries: up, CPU, request rate, 5xx ratio concept, p95 latency concept.",
      "debugTask": "Explain which query indicates user impact vs infrastructure symptom.",
      "evidenceTask": "Lưu promql-query-pack.md."
    },
    "reviewQuestionIds": [
      "p5l1q1",
      "p5l1q2",
      "p5l1q3",
      "p5l1q4",
      "p5l1q5",
      "p5l1q6"
    ]
  },
  {
    "id": "d115",
    "dayNumber": 115,
    "week": 17,
    "dayOfWeek": "Wed",
    "phaseId": "p5",
    "title": "Grafana data source, dashboard panels, variables, visualization, annotations and dashboard as code concept",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Grafana data source, dashboard panels, variables, visualization, annotations and dashboard as code concept. Phần lab biến kiến thức thành thao tác kiểm chứng được: Create/design dashboard with availability, latency, error rate, saturation; add deployment annotation manually/mock. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Grafana data source, dashboard panels, variables, visualization, annotations and dashboard as code concept.",
        "Lab: Create/design dashboard with availability, latency, error rate, saturation; add deployment annotation manually/mock.",
        "Debug/review: Perform dashboard review: every panel answers an operator question?.",
        "Evidence: Lưu dashboard JSON/export or grafana-dashboard-spec.md."
      ],
      "sources": [
        {
          "title": "Prometheus documentation",
          "org": "Prometheus",
          "url": "https://prometheus.io/docs/introduction/overview/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l1",
      "realWorldContext": "Monitoring phải trả lời service có khỏe không bằng metric; alert tốt dựa trên SLI/SLO thay vì spam noise. Ngày này gắn với artifact: Lưu dashboard JSON/export or grafana-dashboard-spec.md.",
      "guidedTask": "Create/design dashboard with availability, latency, error rate, saturation; add deployment annotation manually/mock.",
      "debugTask": "Perform dashboard review: every panel answers an operator question?.",
      "evidenceTask": "Lưu dashboard JSON/export or grafana-dashboard-spec.md."
    },
    "reviewQuestionIds": [
      "p5l1q1",
      "p5l1q2",
      "p5l1q3",
      "p5l1q4",
      "p5l1q5",
      "p5l1q6"
    ]
  },
  {
    "id": "d116",
    "dayNumber": 116,
    "week": 17,
    "dayOfWeek": "Thu",
    "phaseId": "p5",
    "title": "Logging with Loki/Promtail, structured log fields, correlation/request IDs and retention",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Logging with Loki/Promtail, structured log fields, correlation/request IDs and retention. Phần lab biến kiến thức thành thao tác kiểm chứng được: Send/read app logs locally or use sample logs; search error around timestamp; connect metric spike to log evidence. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Logging with Loki/Promtail, structured log fields, correlation/request IDs and retention.",
        "Lab: Send/read app logs locally or use sample logs; search error around timestamp; connect metric spike to log evidence.",
        "Debug/review: Define minimum log schema and privacy/redaction rules.",
        "Evidence: Lưu logging-standard.md, sample query/output."
      ],
      "sources": [
        {
          "title": "Prometheus documentation",
          "org": "Prometheus",
          "url": "https://prometheus.io/docs/introduction/overview/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l1",
      "realWorldContext": "Monitoring phải trả lời service có khỏe không bằng metric; alert tốt dựa trên SLI/SLO thay vì spam noise. Ngày này gắn với artifact: Lưu logging-standard.md, sample query/output.",
      "guidedTask": "Send/read app logs locally or use sample logs; search error around timestamp; connect metric spike to log evidence.",
      "debugTask": "Define minimum log schema and privacy/redaction rules.",
      "evidenceTask": "Lưu logging-standard.md, sample query/output."
    },
    "reviewQuestionIds": [
      "p5l1q1",
      "p5l1q2",
      "p5l1q3",
      "p5l1q4",
      "p5l1q5",
      "p5l1q6"
    ]
  },
  {
    "id": "d117",
    "dayNumber": 117,
    "week": 17,
    "dayOfWeek": "Fri",
    "phaseId": "p5",
    "title": "CloudWatch custom metrics/log insights and AWS vs Prometheus roles",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào CloudWatch custom metrics/log insights and AWS vs Prometheus roles. Phần lab biến kiến thức thành thao tác kiểm chứng được: Create/draft custom metric/log Insights query for app errors; compare alert path and retention cost. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: CloudWatch custom metrics/log insights and AWS vs Prometheus roles.",
        "Lab: Create/draft custom metric/log Insights query for app errors; compare alert path and retention cost.",
        "Debug/review: Write selection matrix: CloudWatch only vs Prometheus vs hybrid.",
        "Evidence: Lưu aws-observability-decision.md."
      ],
      "sources": [
        {
          "title": "Prometheus documentation",
          "org": "Prometheus",
          "url": "https://prometheus.io/docs/introduction/overview/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l1",
      "realWorldContext": "Monitoring phải trả lời service có khỏe không bằng metric; alert tốt dựa trên SLI/SLO thay vì spam noise. Ngày này gắn với artifact: Lưu aws-observability-decision.md.",
      "guidedTask": "Create/draft custom metric/log Insights query for app errors; compare alert path and retention cost.",
      "debugTask": "Write selection matrix: CloudWatch only vs Prometheus vs hybrid.",
      "evidenceTask": "Lưu aws-observability-decision.md."
    },
    "reviewQuestionIds": [
      "p5l1q1",
      "p5l1q2",
      "p5l1q3",
      "p5l1q4",
      "p5l1q5",
      "p5l1q6"
    ]
  },
  {
    "id": "d118",
    "dayNumber": 118,
    "week": 17,
    "dayOfWeek": "Sat",
    "phaseId": "p5",
    "title": "Alertmanager routing, alert quality, severity, runbook, escalation, inhibition and noise control",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Alertmanager routing, alert quality, severity, runbook, escalation, inhibition and noise control. Phần lab biến kiến thức thành thao tác kiểm chứng được: Create two alerts: service unavailable and disk forecast; attach condition, severity, owner, runbook, test path. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Alertmanager routing, alert quality, severity, runbook, escalation, inhibition and noise control.",
        "Lab: Create two alerts: service unavailable and disk forecast; attach condition, severity, owner, runbook, test path.",
        "Debug/review: Review 3 bad alerts and rewrite them actionable.",
        "Evidence: Lưu alert-rules-and-runbooks.md."
      ],
      "sources": [
        {
          "title": "Prometheus documentation",
          "org": "Prometheus",
          "url": "https://prometheus.io/docs/introduction/overview/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l1",
      "realWorldContext": "Monitoring phải trả lời service có khỏe không bằng metric; alert tốt dựa trên SLI/SLO thay vì spam noise. Ngày này gắn với artifact: Lưu alert-rules-and-runbooks.md.",
      "guidedTask": "Create two alerts: service unavailable and disk forecast; attach condition, severity, owner, runbook, test path.",
      "debugTask": "Review 3 bad alerts and rewrite them actionable.",
      "evidenceTask": "Lưu alert-rules-and-runbooks.md."
    },
    "reviewQuestionIds": [
      "p5l1q1",
      "p5l1q2",
      "p5l1q3",
      "p5l1q4",
      "p5l1q5",
      "p5l1q6"
    ]
  },
  {
    "id": "d119",
    "dayNumber": 119,
    "week": 17,
    "dayOfWeek": "Sun",
    "phaseId": "p5",
    "title": "SLI/SLO/SLA, error budget, reliability decision and week review",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào SLI/SLO/SLA, error budget, reliability decision and week review. Phần lab biến kiến thức thành thao tác kiểm chứng được: Define availability and latency SLI for Project 1/3; calculate 99.9% monthly downtime and response when budget spent. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: SLI/SLO/SLA, error budget, reliability decision and week review.",
        "Lab: Define availability and latency SLI for Project 1/3; calculate 99.9% monthly downtime and response when budget spent.",
        "Debug/review: Tabletop alert → dashboard → log → mitigation → postmortem.",
        "Evidence: Lưu slo-service-definition.md; commit/push."
      ],
      "sources": [
        {
          "title": "Prometheus documentation",
          "org": "Prometheus",
          "url": "https://prometheus.io/docs/introduction/overview/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l1",
      "realWorldContext": "Monitoring phải trả lời service có khỏe không bằng metric; alert tốt dựa trên SLI/SLO thay vì spam noise. Ngày này gắn với artifact: Lưu slo-service-definition.md; commit/push.",
      "guidedTask": "Define availability and latency SLI for Project 1/3; calculate 99.9% monthly downtime and response when budget spent.",
      "debugTask": "Tabletop alert → dashboard → log → mitigation → postmortem.",
      "evidenceTask": "Lưu slo-service-definition.md; commit/push."
    },
    "reviewQuestionIds": [
      "p5l1q1",
      "p5l1q2",
      "p5l1q3",
      "p5l1q4",
      "p5l1q5",
      "p5l1q6"
    ]
  },
  {
    "id": "d120",
    "dayNumber": 120,
    "week": 18,
    "dayOfWeek": "Mon",
    "phaseId": "p5",
    "title": "AWS IAM least privilege, permission boundaries/SCP overview, access review and CloudTrail audit",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào AWS IAM least privilege, permission boundaries/SCP overview, access review and CloudTrail audit. Phần lab biến kiến thức thành thao tác kiểm chứng được: Review Project policies/SG with least privilege checklist; identify/remove one unnecessary action/rule in lab code. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: AWS IAM least privilege, permission boundaries/SCP overview, access review and CloudTrail audit.",
        "Lab: Review Project policies/SG with least privilege checklist; identify/remove one unnecessary action/rule in lab code.",
        "Debug/review: Write quarterly access review runbook with evidence/owner.",
        "Evidence: Lưu iam-hardening-review.md."
      ],
      "sources": [
        {
          "title": "AWS Well-Architected Reliability Pillar",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l4",
      "realWorldContext": "Backup/DR/security hardening chứng minh bạn không chỉ deploy được mà còn biết phục hồi và giảm blast radius khi có sự cố. Ngày này gắn với artifact: Lưu iam-hardening-review.md.",
      "guidedTask": "Review Project policies/SG with least privilege checklist; identify/remove one unnecessary action/rule in lab code.",
      "debugTask": "Write quarterly access review runbook with evidence/owner.",
      "evidenceTask": "Lưu iam-hardening-review.md."
    },
    "reviewQuestionIds": [
      "p5l4q1",
      "p5l4q2",
      "p5l4q3",
      "p5l4q4",
      "p5l4q5",
      "p5l4q6"
    ]
  },
  {
    "id": "d121",
    "dayNumber": 121,
    "week": 18,
    "dayOfWeek": "Tue",
    "phaseId": "p5",
    "title": "GuardDuty, Security Hub, Inspector concepts, finding triage, severity and false positives",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào GuardDuty, Security Hub, Inspector concepts, finding triage, severity and false positives. Phần lab biến kiến thức thành thao tác kiểm chứng được: Use console/docs/sample findings; create triage table finding → validate → contain → owner → closure evidence. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: GuardDuty, Security Hub, Inspector concepts, finding triage, severity and false positives.",
        "Lab: Use console/docs/sample findings; create triage table finding → validate → contain → owner → closure evidence.",
        "Debug/review: Decide which service is justified for small lab and cost/time boundary.",
        "Evidence: Lưu aws-security-findings-playbook.md."
      ],
      "sources": [
        {
          "title": "AWS Well-Architected Reliability Pillar",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l4",
      "realWorldContext": "Backup/DR/security hardening chứng minh bạn không chỉ deploy được mà còn biết phục hồi và giảm blast radius khi có sự cố. Ngày này gắn với artifact: Lưu aws-security-findings-playbook.md.",
      "guidedTask": "Use console/docs/sample findings; create triage table finding → validate → contain → owner → closure evidence.",
      "debugTask": "Decide which service is justified for small lab and cost/time boundary.",
      "evidenceTask": "Lưu aws-security-findings-playbook.md."
    },
    "reviewQuestionIds": [
      "p5l4q1",
      "p5l4q2",
      "p5l4q3",
      "p5l4q4",
      "p5l4q5",
      "p5l4q6"
    ]
  },
  {
    "id": "d122",
    "dayNumber": 122,
    "week": 18,
    "dayOfWeek": "Wed",
    "phaseId": "p5",
    "title": "Secrets Manager/SSM/Vault concepts, rotation, app injection, CI secret boundary and .env.example",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Secrets Manager/SSM/Vault concepts, rotation, app injection, CI secret boundary and .env.example. Phần lab biến kiến thức thành thao tác kiểm chứng được: Migrate a fake hardcoded credential to environment/secret placeholder; scan Git history/current tree for secret patterns. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Secrets Manager/SSM/Vault concepts, rotation, app injection, CI secret boundary and .env.example.",
        "Lab: Migrate a fake hardcoded credential to environment/secret placeholder; scan Git history/current tree for secret patterns.",
        "Debug/review: Write incident procedure when a secret was committed: revoke/rotate/audit, not merely delete line.",
        "Evidence: Lưu secret-management.md, safe .env.example."
      ],
      "sources": [
        {
          "title": "AWS Well-Architected Reliability Pillar",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l4",
      "realWorldContext": "Backup/DR/security hardening chứng minh bạn không chỉ deploy được mà còn biết phục hồi và giảm blast radius khi có sự cố. Ngày này gắn với artifact: Lưu secret-management.md, safe .env.example.",
      "guidedTask": "Migrate a fake hardcoded credential to environment/secret placeholder; scan Git history/current tree for secret patterns.",
      "debugTask": "Write incident procedure when a secret was committed: revoke/rotate/audit, not merely delete line.",
      "evidenceTask": "Lưu secret-management.md, safe .env.example."
    },
    "reviewQuestionIds": [
      "p5l4q1",
      "p5l4q2",
      "p5l4q3",
      "p5l4q4",
      "p5l4q5",
      "p5l4q6"
    ]
  },
  {
    "id": "d123",
    "dayNumber": 123,
    "week": 18,
    "dayOfWeek": "Thu",
    "phaseId": "p5",
    "title": "Container supply chain: base image, SBOM concept, Trivy, non-root, capability/resource and image policy",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Container supply chain: base image, SBOM concept, Trivy, non-root, capability/resource and image policy. Phần lab biến kiến thức thành thao tác kiểm chứng được: Scan local image if tool exists; otherwise perform manual Dockerfile review; remediate one issue such as root user/tag latest. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Container supply chain: base image, SBOM concept, Trivy, non-root, capability/resource and image policy.",
        "Lab: Scan local image if tool exists; otherwise perform manual Dockerfile review; remediate one issue such as root user/tag latest.",
        "Debug/review: Add CI gate policy for critical findings with documented exception path.",
        "Evidence: Lưu container-security-review.md."
      ],
      "sources": [
        {
          "title": "AWS Well-Architected Reliability Pillar",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l4",
      "realWorldContext": "Backup/DR/security hardening chứng minh bạn không chỉ deploy được mà còn biết phục hồi và giảm blast radius khi có sự cố. Ngày này gắn với artifact: Lưu container-security-review.md.",
      "guidedTask": "Scan local image if tool exists; otherwise perform manual Dockerfile review; remediate one issue such as root user/tag latest.",
      "debugTask": "Add CI gate policy for critical findings with documented exception path.",
      "evidenceTask": "Lưu container-security-review.md."
    },
    "reviewQuestionIds": [
      "p5l4q1",
      "p5l4q2",
      "p5l4q3",
      "p5l4q4",
      "p5l4q5",
      "p5l4q6"
    ]
  },
  {
    "id": "d124",
    "dayNumber": 124,
    "week": 18,
    "dayOfWeek": "Fri",
    "phaseId": "p5",
    "title": "Kubernetes security: Pod Security Admission, RBAC, network policy, image pull policy and namespace isolation",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Kubernetes security: Pod Security Admission, RBAC, network policy, image pull policy and namespace isolation. Phần lab biến kiến thức thành thao tác kiểm chứng được: Apply/review restricted pod spec: runAsNonRoot, drop capabilities, read-only filesystem where possible; test broken then fix. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Kubernetes security: Pod Security Admission, RBAC, network policy, image pull policy and namespace isolation.",
        "Lab: Apply/review restricted pod spec: runAsNonRoot, drop capabilities, read-only filesystem where possible; test broken then fix.",
        "Debug/review: Map control to threat: privilege escalation, lateral movement, secret exposure.",
        "Evidence: Lưu k8s-security-baseline.md."
      ],
      "sources": [
        {
          "title": "AWS Well-Architected Reliability Pillar",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l4",
      "realWorldContext": "Backup/DR/security hardening chứng minh bạn không chỉ deploy được mà còn biết phục hồi và giảm blast radius khi có sự cố. Ngày này gắn với artifact: Lưu k8s-security-baseline.md.",
      "guidedTask": "Apply/review restricted pod spec: runAsNonRoot, drop capabilities, read-only filesystem where possible; test broken then fix.",
      "debugTask": "Map control to threat: privilege escalation, lateral movement, secret exposure.",
      "evidenceTask": "Lưu k8s-security-baseline.md."
    },
    "reviewQuestionIds": [
      "p5l4q1",
      "p5l4q2",
      "p5l4q3",
      "p5l4q4",
      "p5l4q5",
      "p5l4q6"
    ]
  },
  {
    "id": "d125",
    "dayNumber": 125,
    "week": 18,
    "dayOfWeek": "Sat",
    "phaseId": "p5",
    "title": "TLS, HTTP security headers, OWASP basics, input boundaries, WAF/Shield concepts",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào TLS, HTTP security headers, OWASP basics, input boundaries, WAF/Shield concepts. Phần lab biến kiến thức thành thao tác kiểm chứng được: Run curl -I/SSL check against own/test service; add HSTS/X-Content-Type-Options where appropriate; validate config. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: TLS, HTTP security headers, OWASP basics, input boundaries, WAF/Shield concepts.",
        "Lab: Run curl -I/SSL check against own/test service; add HSTS/X-Content-Type-Options where appropriate; validate config.",
        "Debug/review: Write hardening checklist and what not to claim without penetration test.",
        "Evidence: Lưu web-security-hardening.md."
      ],
      "sources": [
        {
          "title": "AWS Well-Architected Reliability Pillar",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l4",
      "realWorldContext": "Backup/DR/security hardening chứng minh bạn không chỉ deploy được mà còn biết phục hồi và giảm blast radius khi có sự cố. Ngày này gắn với artifact: Lưu web-security-hardening.md.",
      "guidedTask": "Run curl -I/SSL check against own/test service; add HSTS/X-Content-Type-Options where appropriate; validate config.",
      "debugTask": "Write hardening checklist and what not to claim without penetration test.",
      "evidenceTask": "Lưu web-security-hardening.md."
    },
    "reviewQuestionIds": [
      "p5l4q1",
      "p5l4q2",
      "p5l4q3",
      "p5l4q4",
      "p5l4q5",
      "p5l4q6"
    ]
  },
  {
    "id": "d126",
    "dayNumber": 126,
    "week": 18,
    "dayOfWeek": "Sun",
    "phaseId": "p5",
    "title": "Security checkpoint: review assets, threats, mitigations, detection and recovery",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Security checkpoint: review assets, threats, mitigations, detection and recovery. Phần lab biến kiến thức thành thao tác kiểm chứng được: Perform threat-model mini workshop for Project 1/3; choose top 5 risks and an implementable control each. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Security checkpoint: review assets, threats, mitigations, detection and recovery.",
        "Lab: Perform threat-model mini workshop for Project 1/3; choose top 5 risks and an implementable control each.",
        "Debug/review: Review repo for secrets/state/log PII; create security issue backlog.",
        "Evidence: Lưu security-retro.md; commit/push."
      ],
      "sources": [
        {
          "title": "AWS Well-Architected Reliability Pillar",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l4",
      "realWorldContext": "Backup/DR/security hardening chứng minh bạn không chỉ deploy được mà còn biết phục hồi và giảm blast radius khi có sự cố. Ngày này gắn với artifact: Lưu security-retro.md; commit/push.",
      "guidedTask": "Perform threat-model mini workshop for Project 1/3; choose top 5 risks and an implementable control each.",
      "debugTask": "Review repo for secrets/state/log PII; create security issue backlog.",
      "evidenceTask": "Lưu security-retro.md; commit/push."
    },
    "reviewQuestionIds": [
      "p5l4q1",
      "p5l4q2",
      "p5l4q3",
      "p5l4q4",
      "p5l4q5",
      "p5l4q6"
    ]
  },
  {
    "id": "d127",
    "dayNumber": 127,
    "week": 19,
    "dayOfWeek": "Mon",
    "phaseId": "p5",
    "title": "Environment strategy dev/staging/prod, config separation, promotion and approval gate",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Environment strategy dev/staging/prod, config separation, promotion and approval gate. Phần lab biến kiến thức thành thao tác kiểm chứng được: Map one app release from branch to dev/staging/prod; define trigger, test, approver, config, rollback each stage. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Environment strategy dev/staging/prod, config separation, promotion and approval gate.",
        "Lab: Map one app release from branch to dev/staging/prod; define trigger, test, approver, config, rollback each stage.",
        "Debug/review: Create deployment matrix that makes no undocumented manual action.",
        "Evidence: Lưu environment-promotion-model.md."
      ],
      "sources": [
        {
          "title": "OpenTelemetry documentation",
          "org": "OpenTelemetry",
          "url": "https://opentelemetry.io/docs/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l3",
      "realWorldContext": "Incident response tốt yêu cầu timeline, log, impact và prevention; postmortem không đổ lỗi là năng lực SRE thực tế. Ngày này gắn với artifact: Lưu environment-promotion-model.md.",
      "guidedTask": "Map one app release from branch to dev/staging/prod; define trigger, test, approver, config, rollback each stage.",
      "debugTask": "Create deployment matrix that makes no undocumented manual action.",
      "evidenceTask": "Lưu environment-promotion-model.md."
    },
    "reviewQuestionIds": [
      "p5l3q1",
      "p5l3q2",
      "p5l3q3",
      "p5l3q4",
      "p5l3q5",
      "p5l3q6"
    ]
  },
  {
    "id": "d128",
    "dayNumber": 128,
    "week": 19,
    "dayOfWeek": "Tue",
    "phaseId": "p5",
    "title": "Artifact versioning, registry lifecycle, provenance and release retention",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Artifact versioning, registry lifecycle, provenance and release retention. Phần lab biến kiến thức thành thao tác kiểm chứng được: Write ECR/Docker registry lifecycle rule draft; tag 10 sample versions and determine retained/deleted set. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Artifact versioning, registry lifecycle, provenance and release retention.",
        "Lab: Write ECR/Docker registry lifecycle rule draft; tag 10 sample versions and determine retained/deleted set.",
        "Debug/review: Connect deployed version to Git commit, build log and changelog.",
        "Evidence: Lưu artifact-lifecycle-policy.md."
      ],
      "sources": [
        {
          "title": "OpenTelemetry documentation",
          "org": "OpenTelemetry",
          "url": "https://opentelemetry.io/docs/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l3",
      "realWorldContext": "Incident response tốt yêu cầu timeline, log, impact và prevention; postmortem không đổ lỗi là năng lực SRE thực tế. Ngày này gắn với artifact: Lưu artifact-lifecycle-policy.md.",
      "guidedTask": "Write ECR/Docker registry lifecycle rule draft; tag 10 sample versions and determine retained/deleted set.",
      "debugTask": "Connect deployed version to Git commit, build log and changelog.",
      "evidenceTask": "Lưu artifact-lifecycle-policy.md."
    },
    "reviewQuestionIds": [
      "p5l3q1",
      "p5l3q2",
      "p5l3q3",
      "p5l3q4",
      "p5l3q5",
      "p5l3q6"
    ]
  },
  {
    "id": "d129",
    "dayNumber": 129,
    "week": 19,
    "dayOfWeek": "Wed",
    "phaseId": "p5",
    "title": "FluxCD vs Argo CD: reconciliation, UI/CLI, multi-tenancy, sync policy and team fit",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào FluxCD vs Argo CD: reconciliation, UI/CLI, multi-tenancy, sync policy and team fit. Phần lab biến kiến thức thành thao tác kiểm chứng được: Compare using one concrete Project 3 workflow; create sample Kustomization/Application manifest or architecture diagram. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: FluxCD vs Argo CD: reconciliation, UI/CLI, multi-tenancy, sync policy and team fit.",
        "Lab: Compare using one concrete Project 3 workflow; create sample Kustomization/Application manifest or architecture diagram.",
        "Debug/review: Choose one tool and justify based on operations overhead, not popularity.",
        "Evidence: Lưu gitops-tool-decision.md."
      ],
      "sources": [
        {
          "title": "OpenTelemetry documentation",
          "org": "OpenTelemetry",
          "url": "https://opentelemetry.io/docs/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l3",
      "realWorldContext": "Incident response tốt yêu cầu timeline, log, impact và prevention; postmortem không đổ lỗi là năng lực SRE thực tế. Ngày này gắn với artifact: Lưu gitops-tool-decision.md.",
      "guidedTask": "Compare using one concrete Project 3 workflow; create sample Kustomization/Application manifest or architecture diagram.",
      "debugTask": "Choose one tool and justify based on operations overhead, not popularity.",
      "evidenceTask": "Lưu gitops-tool-decision.md."
    },
    "reviewQuestionIds": [
      "p5l3q1",
      "p5l3q2",
      "p5l3q3",
      "p5l3q4",
      "p5l3q5",
      "p5l3q6"
    ]
  },
  {
    "id": "d130",
    "dayNumber": 130,
    "week": 19,
    "dayOfWeek": "Thu",
    "phaseId": "p5",
    "title": "Sealed Secrets/External Secrets, KMS boundary, rotation and Git-safe secret reference",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Sealed Secrets/External Secrets, KMS boundary, rotation and Git-safe secret reference. Phần lab biến kiến thức thành thao tác kiểm chứng được: Design secret flow from store → controller → Pod/CI; use fake secret metadata only. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Sealed Secrets/External Secrets, KMS boundary, rotation and Git-safe secret reference.",
        "Lab: Design secret flow from store → controller → Pod/CI; use fake secret metadata only.",
        "Debug/review: Test/inspect a Secret reference manifest without storing value; define rotation test.",
        "Evidence: Lưu external-secrets-design.md."
      ],
      "sources": [
        {
          "title": "OpenTelemetry documentation",
          "org": "OpenTelemetry",
          "url": "https://opentelemetry.io/docs/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l3",
      "realWorldContext": "Incident response tốt yêu cầu timeline, log, impact và prevention; postmortem không đổ lỗi là năng lực SRE thực tế. Ngày này gắn với artifact: Lưu external-secrets-design.md.",
      "guidedTask": "Design secret flow from store → controller → Pod/CI; use fake secret metadata only.",
      "debugTask": "Test/inspect a Secret reference manifest without storing value; define rotation test.",
      "evidenceTask": "Lưu external-secrets-design.md."
    },
    "reviewQuestionIds": [
      "p5l3q1",
      "p5l3q2",
      "p5l3q3",
      "p5l3q4",
      "p5l3q5",
      "p5l3q6"
    ]
  },
  {
    "id": "d131",
    "dayNumber": 131,
    "week": 19,
    "dayOfWeek": "Fri",
    "phaseId": "p5",
    "title": "Jenkins concepts: controller/agent, Jenkinsfile, credential store, pipeline stages and legacy ops trade-off",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Jenkins concepts: controller/agent, Jenkinsfile, credential store, pipeline stages and legacy ops trade-off. Phần lab biến kiến thức thành thao tác kiểm chứng được: Write a Jenkinsfile equivalent for existing CI pipeline or diagram it; compare security/maintenance with GitHub Actions. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Jenkins concepts: controller/agent, Jenkinsfile, credential store, pipeline stages and legacy ops trade-off.",
        "Lab: Write a Jenkinsfile equivalent for existing CI pipeline or diagram it; compare security/maintenance with GitHub Actions.",
        "Debug/review: Prepare interview answer: when maintain Jenkins instead of migrating immediately.",
        "Evidence: Lưu jenkins-comparison.md."
      ],
      "sources": [
        {
          "title": "OpenTelemetry documentation",
          "org": "OpenTelemetry",
          "url": "https://opentelemetry.io/docs/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l3",
      "realWorldContext": "Incident response tốt yêu cầu timeline, log, impact và prevention; postmortem không đổ lỗi là năng lực SRE thực tế. Ngày này gắn với artifact: Lưu jenkins-comparison.md.",
      "guidedTask": "Write a Jenkinsfile equivalent for existing CI pipeline or diagram it; compare security/maintenance with GitHub Actions.",
      "debugTask": "Prepare interview answer: when maintain Jenkins instead of migrating immediately.",
      "evidenceTask": "Lưu jenkins-comparison.md."
    },
    "reviewQuestionIds": [
      "p5l3q1",
      "p5l3q2",
      "p5l3q3",
      "p5l3q4",
      "p5l3q5",
      "p5l3q6"
    ]
  },
  {
    "id": "d132",
    "dayNumber": 132,
    "week": 19,
    "dayOfWeek": "Sat",
    "phaseId": "p5",
    "title": "GitLab CI syntax, runner, stages, artifacts, environment and migration thought process",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào GitLab CI syntax, runner, stages, artifacts, environment and migration thought process. Phần lab biến kiến thức thành thao tác kiểm chứng được: Translate minimal lint/test/build workflow to .gitlab-ci.yml; validate logically against original behavior. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: GitLab CI syntax, runner, stages, artifacts, environment and migration thought process.",
        "Lab: Translate minimal lint/test/build workflow to .gitlab-ci.yml; validate logically against original behavior.",
        "Debug/review: List vendor-neutral CI concepts you can carry across tools.",
        "Evidence: Lưu .gitlab-ci.example.yml, ci-portability.md."
      ],
      "sources": [
        {
          "title": "OpenTelemetry documentation",
          "org": "OpenTelemetry",
          "url": "https://opentelemetry.io/docs/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l3",
      "realWorldContext": "Incident response tốt yêu cầu timeline, log, impact và prevention; postmortem không đổ lỗi là năng lực SRE thực tế. Ngày này gắn với artifact: Lưu .gitlab-ci.example.yml, ci-portability.md.",
      "guidedTask": "Translate minimal lint/test/build workflow to .gitlab-ci.yml; validate logically against original behavior.",
      "debugTask": "List vendor-neutral CI concepts you can carry across tools.",
      "evidenceTask": "Lưu .gitlab-ci.example.yml, ci-portability.md."
    },
    "reviewQuestionIds": [
      "p5l3q1",
      "p5l3q2",
      "p5l3q3",
      "p5l3q4",
      "p5l3q5",
      "p5l3q6"
    ]
  },
  {
    "id": "d133",
    "dayNumber": 133,
    "week": 19,
    "dayOfWeek": "Sun",
    "phaseId": "p5",
    "title": "Optimization and audit: pipeline time, cache correctness, supply chain and deployment trace",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Optimization and audit: pipeline time, cache correctness, supply chain and deployment trace. Phần lab biến kiến thức thành thao tác kiểm chứng được: Measure/review one CI run; improve only a safe bottleneck; ensure cache cannot mask missing dependency/test. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Optimization and audit: pipeline time, cache correctness, supply chain and deployment trace.",
        "Lab: Measure/review one CI run; improve only a safe bottleneck; ensure cache cannot mask missing dependency/test.",
        "Debug/review: Write release audit trail example from commit to deployment/rollback.",
        "Evidence: Lưu pipeline-optimization-retro.md; commit/push."
      ],
      "sources": [
        {
          "title": "OpenTelemetry documentation",
          "org": "OpenTelemetry",
          "url": "https://opentelemetry.io/docs/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l3",
      "realWorldContext": "Incident response tốt yêu cầu timeline, log, impact và prevention; postmortem không đổ lỗi là năng lực SRE thực tế. Ngày này gắn với artifact: Lưu pipeline-optimization-retro.md; commit/push.",
      "guidedTask": "Measure/review one CI run; improve only a safe bottleneck; ensure cache cannot mask missing dependency/test.",
      "debugTask": "Write release audit trail example from commit to deployment/rollback.",
      "evidenceTask": "Lưu pipeline-optimization-retro.md; commit/push."
    },
    "reviewQuestionIds": [
      "p5l3q1",
      "p5l3q2",
      "p5l3q3",
      "p5l3q4",
      "p5l3q5",
      "p5l3q6"
    ]
  },
  {
    "id": "d134",
    "dayNumber": 134,
    "week": 20,
    "dayOfWeek": "Mon",
    "phaseId": "p5",
    "title": "SRE principles: SLI/SLO/SLA, error budget, toil and balancing feature velocity/reliability",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào SRE principles: SLI/SLO/SLA, error budget, toil and balancing feature velocity/reliability. Phần lab biến kiến thức thành thao tác kiểm chứng được: Refine SLO for two services; calculate monthly error budget and define freeze/escalation action. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: SRE principles: SLI/SLO/SLA, error budget, toil and balancing feature velocity/reliability.",
        "Lab: Refine SLO for two services; calculate monthly error budget and define freeze/escalation action.",
        "Debug/review: Write a stakeholder update explaining user impact without metric jargon.",
        "Evidence: Lưu sre-service-level-policy.md."
      ],
      "sources": [
        {
          "title": "AWS Well-Architected Reliability Pillar",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l4",
      "realWorldContext": "Backup/DR/security hardening chứng minh bạn không chỉ deploy được mà còn biết phục hồi và giảm blast radius khi có sự cố. Ngày này gắn với artifact: Lưu sre-service-level-policy.md.",
      "guidedTask": "Refine SLO for two services; calculate monthly error budget and define freeze/escalation action.",
      "debugTask": "Write a stakeholder update explaining user impact without metric jargon.",
      "evidenceTask": "Lưu sre-service-level-policy.md."
    },
    "reviewQuestionIds": [
      "p5l4q1",
      "p5l4q2",
      "p5l4q3",
      "p5l4q4",
      "p5l4q5",
      "p5l4q6"
    ]
  },
  {
    "id": "d135",
    "dayNumber": 135,
    "week": 20,
    "dayOfWeek": "Tue",
    "phaseId": "p5",
    "title": "Incident command, severity, roles, communication, runbook and postmortem quality",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Incident command, severity, roles, communication, runbook and postmortem quality. Phần lab biến kiến thức thành thao tác kiểm chứng được: Create incident template; run tabletop 30-minute web outage with commander/comms/ops roles even solo. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Incident command, severity, roles, communication, runbook and postmortem quality.",
        "Lab: Create incident template; run tabletop 30-minute web outage with commander/comms/ops roles even solo.",
        "Debug/review: Draft first customer/internal update and final resolution update with timestamps.",
        "Evidence: Lưu incident-kit.md."
      ],
      "sources": [
        {
          "title": "AWS Well-Architected Reliability Pillar",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l4",
      "realWorldContext": "Backup/DR/security hardening chứng minh bạn không chỉ deploy được mà còn biết phục hồi và giảm blast radius khi có sự cố. Ngày này gắn với artifact: Lưu incident-kit.md.",
      "guidedTask": "Create incident template; run tabletop 30-minute web outage with commander/comms/ops roles even solo.",
      "debugTask": "Draft first customer/internal update and final resolution update with timestamps.",
      "evidenceTask": "Lưu incident-kit.md."
    },
    "reviewQuestionIds": [
      "p5l4q1",
      "p5l4q2",
      "p5l4q3",
      "p5l4q4",
      "p5l4q5",
      "p5l4q6"
    ]
  },
  {
    "id": "d136",
    "dayNumber": 136,
    "week": 20,
    "dayOfWeek": "Wed",
    "phaseId": "p5",
    "title": "Chaos engineering hypothesis, blast radius, steady state, abort condition and learning objective",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Chaos engineering hypothesis, blast radius, steady state, abort condition and learning objective. Phần lab biến kiến thức thành thao tác kiểm chứng được: On local K8s/Docker kill app/Pod or inject latency; observe alert/recovery; stop at defined abort condition. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Chaos engineering hypothesis, blast radius, steady state, abort condition and learning objective.",
        "Lab: On local K8s/Docker kill app/Pod or inject latency; observe alert/recovery; stop at defined abort condition.",
        "Debug/review: Write experiment result, unexpected behavior and follow-up action.",
        "Evidence: Lưu chaos-experiment-01.md."
      ],
      "sources": [
        {
          "title": "AWS Well-Architected Reliability Pillar",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l4",
      "realWorldContext": "Backup/DR/security hardening chứng minh bạn không chỉ deploy được mà còn biết phục hồi và giảm blast radius khi có sự cố. Ngày này gắn với artifact: Lưu chaos-experiment-01.md.",
      "guidedTask": "On local K8s/Docker kill app/Pod or inject latency; observe alert/recovery; stop at defined abort condition.",
      "debugTask": "Write experiment result, unexpected behavior and follow-up action.",
      "evidenceTask": "Lưu chaos-experiment-01.md."
    },
    "reviewQuestionIds": [
      "p5l4q1",
      "p5l4q2",
      "p5l4q3",
      "p5l4q4",
      "p5l4q5",
      "p5l4q6"
    ]
  },
  {
    "id": "d137",
    "dayNumber": 137,
    "week": 20,
    "dayOfWeek": "Thu",
    "phaseId": "p5",
    "title": "Backup/restore: snapshot, logical backup, S3 versioning, integrity, encryption and restore validation",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Backup/restore: snapshot, logical backup, S3 versioning, integrity, encryption and restore validation. Phần lab biến kiến thức thành thao tác kiểm chứng được: Perform restore drill of database/file archive to separate path/DB; run integrity/query checks and time it. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Backup/restore: snapshot, logical backup, S3 versioning, integrity, encryption and restore validation.",
        "Lab: Perform restore drill of database/file archive to separate path/DB; run integrity/query checks and time it.",
        "Debug/review: Calculate actual lab RPO/RTO and gap from target.",
        "Evidence: Lưu restore-drill-01.md."
      ],
      "sources": [
        {
          "title": "AWS Well-Architected Reliability Pillar",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l4",
      "realWorldContext": "Backup/DR/security hardening chứng minh bạn không chỉ deploy được mà còn biết phục hồi và giảm blast radius khi có sự cố. Ngày này gắn với artifact: Lưu restore-drill-01.md.",
      "guidedTask": "Perform restore drill of database/file archive to separate path/DB; run integrity/query checks and time it.",
      "debugTask": "Calculate actual lab RPO/RTO and gap from target.",
      "evidenceTask": "Lưu restore-drill-01.md."
    },
    "reviewQuestionIds": [
      "p5l4q1",
      "p5l4q2",
      "p5l4q3",
      "p5l4q4",
      "p5l4q5",
      "p5l4q6"
    ]
  },
  {
    "id": "d138",
    "dayNumber": 138,
    "week": 20,
    "dayOfWeek": "Fri",
    "phaseId": "p5",
    "title": "DR strategies: backup/restore, pilot light, warm standby, active-active; RTO/RPO/cost trade-off",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào DR strategies: backup/restore, pilot light, warm standby, active-active; RTO/RPO/cost trade-off. Phần lab biến kiến thức thành thao tác kiểm chứng được: Choose DR strategy for Project 1; draw failure domain and recovery steps; list dependencies often forgotten (DNS/secrets/IAM). Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: DR strategies: backup/restore, pilot light, warm standby, active-active; RTO/RPO/cost trade-off.",
        "Lab: Choose DR strategy for Project 1; draw failure domain and recovery steps; list dependencies often forgotten (DNS/secrets/IAM).",
        "Debug/review: Write go/no-go checklist for DR test.",
        "Evidence: Lưu dr-design.md."
      ],
      "sources": [
        {
          "title": "AWS Well-Architected Reliability Pillar",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l4",
      "realWorldContext": "Backup/DR/security hardening chứng minh bạn không chỉ deploy được mà còn biết phục hồi và giảm blast radius khi có sự cố. Ngày này gắn với artifact: Lưu dr-design.md.",
      "guidedTask": "Choose DR strategy for Project 1; draw failure domain and recovery steps; list dependencies often forgotten (DNS/secrets/IAM).",
      "debugTask": "Write go/no-go checklist for DR test.",
      "evidenceTask": "Lưu dr-design.md."
    },
    "reviewQuestionIds": [
      "p5l4q1",
      "p5l4q2",
      "p5l4q3",
      "p5l4q4",
      "p5l4q5",
      "p5l4q6"
    ]
  },
  {
    "id": "d139",
    "dayNumber": 139,
    "week": 20,
    "dayOfWeek": "Sat",
    "phaseId": "p5",
    "title": "Performance triage: latency, saturation, database, CPU/memory, load test safety and capacity planning",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Performance triage: latency, saturation, database, CPU/memory, load test safety and capacity planning. Phần lab biến kiến thức thành thao tác kiểm chứng được: Run small local load test or analyze sample; record baseline, bottleneck hypothesis, one change and re-measurement. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Performance triage: latency, saturation, database, CPU/memory, load test safety and capacity planning.",
        "Lab: Run small local load test or analyze sample; record baseline, bottleneck hypothesis, one change and re-measurement.",
        "Debug/review: Reject an optimization if no measurement improvement or it increases risk.",
        "Evidence: Lưu performance-test.md."
      ],
      "sources": [
        {
          "title": "AWS Well-Architected Reliability Pillar",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l4",
      "realWorldContext": "Backup/DR/security hardening chứng minh bạn không chỉ deploy được mà còn biết phục hồi và giảm blast radius khi có sự cố. Ngày này gắn với artifact: Lưu performance-test.md.",
      "guidedTask": "Run small local load test or analyze sample; record baseline, bottleneck hypothesis, one change and re-measurement.",
      "debugTask": "Reject an optimization if no measurement improvement or it increases risk.",
      "evidenceTask": "Lưu performance-test.md."
    },
    "reviewQuestionIds": [
      "p5l4q1",
      "p5l4q2",
      "p5l4q3",
      "p5l4q4",
      "p5l4q5",
      "p5l4q6"
    ]
  },
  {
    "id": "d140",
    "dayNumber": 140,
    "week": 20,
    "dayOfWeek": "Sun",
    "phaseId": "p5",
    "title": "Month 5 reliability review: demonstrate detect → mitigate → restore → learn",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Month 5 reliability review: demonstrate detect → mitigate → restore → learn. Phần lab biến kiến thức thành thao tác kiểm chứng được: Run capstone incident: alert fires, triage dashboard/log, fix/rollback, restore one asset, write postmortem. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Month 5 reliability review: demonstrate detect → mitigate → restore → learn.",
        "Lab: Run capstone incident: alert fires, triage dashboard/log, fix/rollback, restore one asset, write postmortem.",
        "Debug/review: Update portfolio with real evidence/limitations and backlog next reliability improvement.",
        "Evidence: Lưu month05-sre-capstone.md; commit/push."
      ],
      "sources": [
        {
          "title": "AWS Well-Architected Reliability Pillar",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Introduction to the Prometheus Monitoring System",
          "org": "PromLabs",
          "url": "https://www.youtube.com/watch?v=STVMGrYIlfg",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p5l4",
      "realWorldContext": "Backup/DR/security hardening chứng minh bạn không chỉ deploy được mà còn biết phục hồi và giảm blast radius khi có sự cố. Ngày này gắn với artifact: Lưu month05-sre-capstone.md; commit/push.",
      "guidedTask": "Run capstone incident: alert fires, triage dashboard/log, fix/rollback, restore one asset, write postmortem.",
      "debugTask": "Update portfolio with real evidence/limitations and backlog next reliability improvement.",
      "evidenceTask": "Lưu month05-sre-capstone.md; commit/push."
    },
    "reviewQuestionIds": [
      "p5l4q1",
      "p5l4q2",
      "p5l4q3",
      "p5l4q4",
      "p5l4q5",
      "p5l4q6"
    ]
  },
  {
    "id": "d141",
    "dayNumber": 141,
    "week": 21,
    "dayOfWeek": "Mon",
    "phaseId": "p6",
    "title": "EC2, EBS, AMI, ASG, ALB/NLB, placement and compute selection scenario",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào EC2, EBS, AMI, ASG, ALB/NLB, placement and compute selection scenario. Phần lab biến kiến thức thành thao tác kiểm chứng được: Solve 20 scenario questions; recreate one HA compute design diagram and test one EC2/ASG concept in existing lab. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: EC2, EBS, AMI, ASG, ALB/NLB, placement and compute selection scenario.",
        "Lab: Solve 20 scenario questions; recreate one HA compute design diagram and test one EC2/ASG concept in existing lab.",
        "Debug/review: Write decision cards: ALB vs NLB, EBS vs instance store, On-Demand vs Spot.",
        "Evidence: Lưu saa-week21-day1.md with wrong-answer rationale."
      ],
      "sources": [
        {
          "title": "AWS Certified Solutions Architect - Associate exam guide",
          "org": "AWS Training and Certification",
          "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "AWS Solutions Architect Associate Certification Course",
          "org": "freeCodeCamp.org",
          "url": "https://www.youtube.com/watch?v=c3Cn4xYfxJY",
          "type": "video",
          "verified": false
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l1",
      "realWorldContext": "SAA-C03 kiểm tra trade-off kiến trúc; học theo case giúp nối chứng chỉ với quyết định production-like. Ngày này gắn với artifact: Lưu saa-week21-day1.md with wrong-answer rationale.",
      "guidedTask": "Solve 20 scenario questions; recreate one HA compute design diagram and test one EC2/ASG concept in existing lab.",
      "debugTask": "Write decision cards: ALB vs NLB, EBS vs instance store, On-Demand vs Spot.",
      "evidenceTask": "Lưu saa-week21-day1.md with wrong-answer rationale."
    },
    "reviewQuestionIds": [
      "p6l1q1",
      "p6l1q2",
      "p6l1q3",
      "p6l1q5",
      "p6l1q6"
    ]
  },
  {
    "id": "d142",
    "dayNumber": 142,
    "week": 21,
    "dayOfWeek": "Tue",
    "phaseId": "p6",
    "title": "S3 versioning/lifecycle/replication/storage class, EFS/FSx and data durability choices",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào S3 versioning/lifecycle/replication/storage class, EFS/FSx and data durability choices. Phần lab biến kiến thức thành thao tác kiểm chứng được: Solve 20 storage scenarios; implement/inspect lifecycle/version restore in S3 lab or mock policy. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: S3 versioning/lifecycle/replication/storage class, EFS/FSx and data durability choices.",
        "Lab: Solve 20 storage scenarios; implement/inspect lifecycle/version restore in S3 lab or mock policy.",
        "Debug/review: Create storage selection table based on access, latency, shared filesystem, archive, cost.",
        "Evidence: Lưu storage-decision-map.md."
      ],
      "sources": [
        {
          "title": "AWS Certified Solutions Architect - Associate exam guide",
          "org": "AWS Training and Certification",
          "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "AWS Solutions Architect Associate Certification Course",
          "org": "freeCodeCamp.org",
          "url": "https://www.youtube.com/watch?v=c3Cn4xYfxJY",
          "type": "video",
          "verified": false
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l1",
      "realWorldContext": "SAA-C03 kiểm tra trade-off kiến trúc; học theo case giúp nối chứng chỉ với quyết định production-like. Ngày này gắn với artifact: Lưu storage-decision-map.md.",
      "guidedTask": "Solve 20 storage scenarios; implement/inspect lifecycle/version restore in S3 lab or mock policy.",
      "debugTask": "Create storage selection table based on access, latency, shared filesystem, archive, cost.",
      "evidenceTask": "Lưu storage-decision-map.md."
    },
    "reviewQuestionIds": [
      "p6l1q1",
      "p6l1q2",
      "p6l1q3",
      "p6l1q5",
      "p6l1q6"
    ]
  },
  {
    "id": "d143",
    "dayNumber": 143,
    "week": 21,
    "dayOfWeek": "Wed",
    "phaseId": "p6",
    "title": "RDS/Aurora/DynamoDB/ElastiCache, Multi-AZ/read replica, backup, performance and global patterns",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào RDS/Aurora/DynamoDB/ElastiCache, Multi-AZ/read replica, backup, performance and global patterns. Phần lab biến kiến thức thành thao tác kiểm chứng được: Solve 20 database scenarios; diagram read scale/failover; repeat local restore and measure. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: RDS/Aurora/DynamoDB/ElastiCache, Multi-AZ/read replica, backup, performance and global patterns.",
        "Lab: Solve 20 database scenarios; diagram read scale/failover; repeat local restore and measure.",
        "Debug/review: Write decision cards: Multi-AZ vs read replica; RDS vs DynamoDB; cache use/risk.",
        "Evidence: Lưu database-decision-map.md."
      ],
      "sources": [
        {
          "title": "AWS Certified Solutions Architect - Associate exam guide",
          "org": "AWS Training and Certification",
          "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "AWS Solutions Architect Associate Certification Course",
          "org": "freeCodeCamp.org",
          "url": "https://www.youtube.com/watch?v=c3Cn4xYfxJY",
          "type": "video",
          "verified": false
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l1",
      "realWorldContext": "SAA-C03 kiểm tra trade-off kiến trúc; học theo case giúp nối chứng chỉ với quyết định production-like. Ngày này gắn với artifact: Lưu database-decision-map.md.",
      "guidedTask": "Solve 20 database scenarios; diagram read scale/failover; repeat local restore and measure.",
      "debugTask": "Write decision cards: Multi-AZ vs read replica; RDS vs DynamoDB; cache use/risk.",
      "evidenceTask": "Lưu database-decision-map.md."
    },
    "reviewQuestionIds": [
      "p6l1q1",
      "p6l1q2",
      "p6l1q3",
      "p6l1q5",
      "p6l1q6"
    ]
  },
  {
    "id": "d144",
    "dayNumber": 144,
    "week": 21,
    "dayOfWeek": "Thu",
    "phaseId": "p6",
    "title": "Serverless: Lambda, API Gateway, event source, concurrency, timeout and Step Functions overview",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Serverless: Lambda, API Gateway, event source, concurrency, timeout and Step Functions overview. Phần lab biến kiến thức thành thao tác kiểm chứng được: Solve 15 serverless scenarios; build/draw event flow S3 → event → Lambda → queue and identify retry/DLQ. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Serverless: Lambda, API Gateway, event source, concurrency, timeout and Step Functions overview.",
        "Lab: Solve 15 serverless scenarios; build/draw event flow S3 → event → Lambda → queue and identify retry/DLQ.",
        "Debug/review: Explain why not every web workload should move to Lambda.",
        "Evidence: Lưu serverless-tradeoffs.md."
      ],
      "sources": [
        {
          "title": "AWS Certified Solutions Architect - Associate exam guide",
          "org": "AWS Training and Certification",
          "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "AWS Solutions Architect Associate Certification Course",
          "org": "freeCodeCamp.org",
          "url": "https://www.youtube.com/watch?v=c3Cn4xYfxJY",
          "type": "video",
          "verified": false
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l1",
      "realWorldContext": "SAA-C03 kiểm tra trade-off kiến trúc; học theo case giúp nối chứng chỉ với quyết định production-like. Ngày này gắn với artifact: Lưu serverless-tradeoffs.md.",
      "guidedTask": "Solve 15 serverless scenarios; build/draw event flow S3 → event → Lambda → queue and identify retry/DLQ.",
      "debugTask": "Explain why not every web workload should move to Lambda.",
      "evidenceTask": "Lưu serverless-tradeoffs.md."
    },
    "reviewQuestionIds": [
      "p6l1q1",
      "p6l1q2",
      "p6l1q3",
      "p6l1q5",
      "p6l1q6"
    ]
  },
  {
    "id": "d145",
    "dayNumber": 145,
    "week": 21,
    "dayOfWeek": "Fri",
    "phaseId": "p6",
    "title": "Messaging: SQS, SNS, EventBridge, Kinesis and decoupling patterns",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Messaging: SQS, SNS, EventBridge, Kinesis and decoupling patterns. Phần lab biến kiến thức thành thao tác kiểm chứng được: Solve 15 messaging scenarios; design order processing with queue, retry/DLQ and idempotency key. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Messaging: SQS, SNS, EventBridge, Kinesis and decoupling patterns.",
        "Lab: Solve 15 messaging scenarios; design order processing with queue, retry/DLQ and idempotency key.",
        "Debug/review: Write failure-mode table consumer down/duplicate/event fanout.",
        "Evidence: Lưu messaging-patterns.md."
      ],
      "sources": [
        {
          "title": "AWS Certified Solutions Architect - Associate exam guide",
          "org": "AWS Training and Certification",
          "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "AWS Solutions Architect Associate Certification Course",
          "org": "freeCodeCamp.org",
          "url": "https://www.youtube.com/watch?v=c3Cn4xYfxJY",
          "type": "video",
          "verified": false
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l1",
      "realWorldContext": "SAA-C03 kiểm tra trade-off kiến trúc; học theo case giúp nối chứng chỉ với quyết định production-like. Ngày này gắn với artifact: Lưu messaging-patterns.md.",
      "guidedTask": "Solve 15 messaging scenarios; design order processing with queue, retry/DLQ and idempotency key.",
      "debugTask": "Write failure-mode table consumer down/duplicate/event fanout.",
      "evidenceTask": "Lưu messaging-patterns.md."
    },
    "reviewQuestionIds": [
      "p6l1q1",
      "p6l1q2",
      "p6l1q3",
      "p6l1q5",
      "p6l1q6"
    ]
  },
  {
    "id": "d146",
    "dayNumber": 146,
    "week": 21,
    "dayOfWeek": "Sat",
    "phaseId": "p6",
    "title": "Mixed-domain architecture drills and elimination technique for exam questions",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Mixed-domain architecture drills and elimination technique for exam questions. Phần lab biến kiến thức thành thao tác kiểm chứng được: Take timed 30-question mini exam; classify each wrong answer by concept gap vs reading error. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Mixed-domain architecture drills and elimination technique for exam questions.",
        "Lab: Take timed 30-question mini exam; classify each wrong answer by concept gap vs reading error.",
        "Debug/review: Recreate one wrong topic in lab/doc instead of only reading answer.",
        "Evidence: Lưu saa-mini-exam-01-review.md."
      ],
      "sources": [
        {
          "title": "AWS Certified Solutions Architect - Associate exam guide",
          "org": "AWS Training and Certification",
          "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "AWS Solutions Architect Associate Certification Course",
          "org": "freeCodeCamp.org",
          "url": "https://www.youtube.com/watch?v=c3Cn4xYfxJY",
          "type": "video",
          "verified": false
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l1",
      "realWorldContext": "SAA-C03 kiểm tra trade-off kiến trúc; học theo case giúp nối chứng chỉ với quyết định production-like. Ngày này gắn với artifact: Lưu saa-mini-exam-01-review.md.",
      "guidedTask": "Take timed 30-question mini exam; classify each wrong answer by concept gap vs reading error.",
      "debugTask": "Recreate one wrong topic in lab/doc instead of only reading answer.",
      "evidenceTask": "Lưu saa-mini-exam-01-review.md."
    },
    "reviewQuestionIds": [
      "p6l1q1",
      "p6l1q2",
      "p6l1q3",
      "p6l1q5",
      "p6l1q6"
    ]
  },
  {
    "id": "d147",
    "dayNumber": 147,
    "week": 21,
    "dayOfWeek": "Sun",
    "phaseId": "p6",
    "title": "Week review and spaced repetition setup",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Week review and spaced repetition setup. Phần lab biến kiến thức thành thao tác kiểm chứng được: Review all decision cards; teach 5 service choices aloud with requirement → constraint → service → trade-off. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Week review and spaced repetition setup.",
        "Lab: Review all decision cards; teach 5 service choices aloud with requirement → constraint → service → trade-off.",
        "Debug/review: Set weak-topic queue for next week; record score and target not just confidence.",
        "Evidence: Lưu week21-retro.md; commit/push."
      ],
      "sources": [
        {
          "title": "AWS Certified Solutions Architect - Associate exam guide",
          "org": "AWS Training and Certification",
          "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "AWS Solutions Architect Associate Certification Course",
          "org": "freeCodeCamp.org",
          "url": "https://www.youtube.com/watch?v=c3Cn4xYfxJY",
          "type": "video",
          "verified": false
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l1",
      "realWorldContext": "SAA-C03 kiểm tra trade-off kiến trúc; học theo case giúp nối chứng chỉ với quyết định production-like. Ngày này gắn với artifact: Lưu week21-retro.md; commit/push.",
      "guidedTask": "Review all decision cards; teach 5 service choices aloud with requirement → constraint → service → trade-off.",
      "debugTask": "Set weak-topic queue for next week; record score and target not just confidence.",
      "evidenceTask": "Lưu week21-retro.md; commit/push."
    },
    "reviewQuestionIds": [
      "p6l1q1",
      "p6l1q2",
      "p6l1q3",
      "p6l1q5",
      "p6l1q6"
    ]
  },
  {
    "id": "d148",
    "dayNumber": 148,
    "week": 22,
    "dayOfWeek": "Mon",
    "phaseId": "p6",
    "title": "VPC, subnet, route, IGW/NAT, endpoint, peering/TGW, VPN/Direct Connect and DNS",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào VPC, subnet, route, IGW/NAT, endpoint, peering/TGW, VPN/Direct Connect and DNS. Phần lab biến kiến thức thành thao tác kiểm chứng được: Solve 20 networking questions; redraw private S3 access using VPC endpoint and compare NAT cost/security. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: VPC, subnet, route, IGW/NAT, endpoint, peering/TGW, VPN/Direct Connect and DNS.",
        "Lab: Solve 20 networking questions; redraw private S3 access using VPC endpoint and compare NAT cost/security.",
        "Debug/review: Write network decision tree from requirement to service.",
        "Evidence: Lưu networking-decision-map.md."
      ],
      "sources": [
        {
          "title": "AWS Certified Solutions Architect - Associate exam guide",
          "org": "AWS Training and Certification",
          "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "AWS Solutions Architect Associate Certification Course",
          "org": "freeCodeCamp.org",
          "url": "https://www.youtube.com/watch?v=c3Cn4xYfxJY",
          "type": "video",
          "verified": false
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l1",
      "realWorldContext": "SAA-C03 kiểm tra trade-off kiến trúc; học theo case giúp nối chứng chỉ với quyết định production-like. Ngày này gắn với artifact: Lưu networking-decision-map.md.",
      "guidedTask": "Solve 20 networking questions; redraw private S3 access using VPC endpoint and compare NAT cost/security.",
      "debugTask": "Write network decision tree from requirement to service.",
      "evidenceTask": "Lưu networking-decision-map.md."
    },
    "reviewQuestionIds": [
      "p6l1q1",
      "p6l1q2",
      "p6l1q3",
      "p6l1q5",
      "p6l1q6"
    ]
  },
  {
    "id": "d149",
    "dayNumber": 149,
    "week": 22,
    "dayOfWeek": "Tue",
    "phaseId": "p6",
    "title": "Route 53, CloudFront, Global Accelerator, ALB/NLB, multi-AZ and multi-region choices",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Route 53, CloudFront, Global Accelerator, ALB/NLB, multi-AZ and multi-region choices. Phần lab biến kiến thức thành thao tác kiểm chứng được: Solve 20 HA/global scenarios; diagram failover routing and identify health check/replication dependencies. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Route 53, CloudFront, Global Accelerator, ALB/NLB, multi-AZ and multi-region choices.",
        "Lab: Solve 20 HA/global scenarios; diagram failover routing and identify health check/replication dependencies.",
        "Debug/review: Explain active-passive vs active-active in 5 sentences.",
        "Evidence: Lưu ha-and-edge-patterns.md."
      ],
      "sources": [
        {
          "title": "AWS Certified Solutions Architect - Associate exam guide",
          "org": "AWS Training and Certification",
          "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "AWS Solutions Architect Associate Certification Course",
          "org": "freeCodeCamp.org",
          "url": "https://www.youtube.com/watch?v=c3Cn4xYfxJY",
          "type": "video",
          "verified": false
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l1",
      "realWorldContext": "SAA-C03 kiểm tra trade-off kiến trúc; học theo case giúp nối chứng chỉ với quyết định production-like. Ngày này gắn với artifact: Lưu ha-and-edge-patterns.md.",
      "guidedTask": "Solve 20 HA/global scenarios; diagram failover routing and identify health check/replication dependencies.",
      "debugTask": "Explain active-passive vs active-active in 5 sentences.",
      "evidenceTask": "Lưu ha-and-edge-patterns.md."
    },
    "reviewQuestionIds": [
      "p6l1q1",
      "p6l1q2",
      "p6l1q3",
      "p6l1q5",
      "p6l1q6"
    ]
  },
  {
    "id": "d150",
    "dayNumber": 150,
    "week": 22,
    "dayOfWeek": "Wed",
    "phaseId": "p6",
    "title": "IAM, KMS, Organizations/SCP, WAF/Shield, CloudTrail/Config and security service selection",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào IAM, KMS, Organizations/SCP, WAF/Shield, CloudTrail/Config and security service selection. Phần lab biến kiến thức thành thao tác kiểm chứng được: Solve 20 security scenarios; turn 5 wrong answers into threat → control → evidence cards. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: IAM, KMS, Organizations/SCP, WAF/Shield, CloudTrail/Config and security service selection.",
        "Lab: Solve 20 security scenarios; turn 5 wrong answers into threat → control → evidence cards.",
        "Debug/review: Review Project IAM/security matrix and improve one control/document.",
        "Evidence: Lưu security-decision-map.md."
      ],
      "sources": [
        {
          "title": "AWS Certified Solutions Architect - Associate exam guide",
          "org": "AWS Training and Certification",
          "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "AWS Solutions Architect Associate Certification Course",
          "org": "freeCodeCamp.org",
          "url": "https://www.youtube.com/watch?v=c3Cn4xYfxJY",
          "type": "video",
          "verified": false
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l1",
      "realWorldContext": "SAA-C03 kiểm tra trade-off kiến trúc; học theo case giúp nối chứng chỉ với quyết định production-like. Ngày này gắn với artifact: Lưu security-decision-map.md.",
      "guidedTask": "Solve 20 security scenarios; turn 5 wrong answers into threat → control → evidence cards.",
      "debugTask": "Review Project IAM/security matrix and improve one control/document.",
      "evidenceTask": "Lưu security-decision-map.md."
    },
    "reviewQuestionIds": [
      "p6l1q1",
      "p6l1q2",
      "p6l1q3",
      "p6l1q5",
      "p6l1q6"
    ]
  },
  {
    "id": "d151",
    "dayNumber": 151,
    "week": 22,
    "dayOfWeek": "Thu",
    "phaseId": "p6",
    "title": "Cost optimization: right-size, Savings Plans, Spot, S3 lifecycle, data transfer, tagging and Budgets",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Cost optimization: right-size, Savings Plans, Spot, S3 lifecycle, data transfer, tagging and Budgets. Phần lab biến kiến thức thành thao tác kiểm chứng được: Solve 15 cost scenarios; use AWS calculator/estimates for Project 1/3; list top 3 cost drivers. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Cost optimization: right-size, Savings Plans, Spot, S3 lifecycle, data transfer, tagging and Budgets.",
        "Lab: Solve 15 cost scenarios; use AWS calculator/estimates for Project 1/3; list top 3 cost drivers.",
        "Debug/review: Create monthly cost guardrail and cleanup schedule.",
        "Evidence: Lưu cost-optimization-plan.md."
      ],
      "sources": [
        {
          "title": "AWS Certified Solutions Architect - Associate exam guide",
          "org": "AWS Training and Certification",
          "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "AWS Solutions Architect Associate Certification Course",
          "org": "freeCodeCamp.org",
          "url": "https://www.youtube.com/watch?v=c3Cn4xYfxJY",
          "type": "video",
          "verified": false
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l1",
      "realWorldContext": "SAA-C03 kiểm tra trade-off kiến trúc; học theo case giúp nối chứng chỉ với quyết định production-like. Ngày này gắn với artifact: Lưu cost-optimization-plan.md.",
      "guidedTask": "Solve 15 cost scenarios; use AWS calculator/estimates for Project 1/3; list top 3 cost drivers.",
      "debugTask": "Create monthly cost guardrail and cleanup schedule.",
      "evidenceTask": "Lưu cost-optimization-plan.md."
    },
    "reviewQuestionIds": [
      "p6l1q1",
      "p6l1q2",
      "p6l1q3",
      "p6l1q5",
      "p6l1q6"
    ]
  },
  {
    "id": "d152",
    "dayNumber": 152,
    "week": 22,
    "dayOfWeek": "Fri",
    "phaseId": "p6",
    "title": "Well-Architected Framework: operational excellence, security, reliability, performance, cost, sustainability",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Well-Architected Framework: operational excellence, security, reliability, performance, cost, sustainability. Phần lab biến kiến thức thành thao tác kiểm chứng được: Score Project 1 against all pillars; choose one gap per pillar with impact/effort. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Well-Architected Framework: operational excellence, security, reliability, performance, cost, sustainability.",
        "Lab: Score Project 1 against all pillars; choose one gap per pillar with impact/effort.",
        "Debug/review: Prioritize three fixes using risk × feasibility, not number of services.",
        "Evidence: Lưu well-architected-review.md."
      ],
      "sources": [
        {
          "title": "AWS Certified Solutions Architect - Associate exam guide",
          "org": "AWS Training and Certification",
          "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "AWS Solutions Architect Associate Certification Course",
          "org": "freeCodeCamp.org",
          "url": "https://www.youtube.com/watch?v=c3Cn4xYfxJY",
          "type": "video",
          "verified": false
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l1",
      "realWorldContext": "SAA-C03 kiểm tra trade-off kiến trúc; học theo case giúp nối chứng chỉ với quyết định production-like. Ngày này gắn với artifact: Lưu well-architected-review.md.",
      "guidedTask": "Score Project 1 against all pillars; choose one gap per pillar with impact/effort.",
      "debugTask": "Prioritize three fixes using risk × feasibility, not number of services.",
      "evidenceTask": "Lưu well-architected-review.md."
    },
    "reviewQuestionIds": [
      "p6l1q1",
      "p6l1q2",
      "p6l1q3",
      "p6l1q5",
      "p6l1q6"
    ]
  },
  {
    "id": "d153",
    "dayNumber": 153,
    "week": 22,
    "dayOfWeek": "Sat",
    "phaseId": "p6",
    "title": "Timed practice and error taxonomy",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Timed practice and error taxonomy. Phần lab biến kiến thức thành thao tác kiểm chứng được: Take 35-question timed exam; inspect every wrong/guessed answer and link it to a decision card or lab. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Timed practice and error taxonomy.",
        "Lab: Take 35-question timed exam; inspect every wrong/guessed answer and link it to a decision card or lab.",
        "Debug/review: Redo 5 weakest scenario types after a break without notes.",
        "Evidence: Lưu saa-mini-exam-02-review.md."
      ],
      "sources": [
        {
          "title": "AWS Certified Solutions Architect - Associate exam guide",
          "org": "AWS Training and Certification",
          "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "AWS Solutions Architect Associate Certification Course",
          "org": "freeCodeCamp.org",
          "url": "https://www.youtube.com/watch?v=c3Cn4xYfxJY",
          "type": "video",
          "verified": false
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l1",
      "realWorldContext": "SAA-C03 kiểm tra trade-off kiến trúc; học theo case giúp nối chứng chỉ với quyết định production-like. Ngày này gắn với artifact: Lưu saa-mini-exam-02-review.md.",
      "guidedTask": "Take 35-question timed exam; inspect every wrong/guessed answer and link it to a decision card or lab.",
      "debugTask": "Redo 5 weakest scenario types after a break without notes.",
      "evidenceTask": "Lưu saa-mini-exam-02-review.md."
    },
    "reviewQuestionIds": [
      "p6l1q1",
      "p6l1q2",
      "p6l1q3",
      "p6l1q5",
      "p6l1q6"
    ]
  },
  {
    "id": "d154",
    "dayNumber": 154,
    "week": 22,
    "dayOfWeek": "Sun",
    "phaseId": "p6",
    "title": "Week review: architecture explanation to a non-exam audience",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Week review: architecture explanation to a non-exam audience. Phần lab biến kiến thức thành thao tác kiểm chứng được: Present one 5-minute design: requirements, diagram, trade-offs, failure/DR, cost and security. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Week review: architecture explanation to a non-exam audience.",
        "Lab: Present one 5-minute design: requirements, diagram, trade-offs, failure/DR, cost and security.",
        "Debug/review: Update flashcards/weak-topic queue and plan next deep work.",
        "Evidence: Lưu week22-retro.md; commit/push."
      ],
      "sources": [
        {
          "title": "AWS Certified Solutions Architect - Associate exam guide",
          "org": "AWS Training and Certification",
          "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "AWS Solutions Architect Associate Certification Course",
          "org": "freeCodeCamp.org",
          "url": "https://www.youtube.com/watch?v=c3Cn4xYfxJY",
          "type": "video",
          "verified": false
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l1",
      "realWorldContext": "SAA-C03 kiểm tra trade-off kiến trúc; học theo case giúp nối chứng chỉ với quyết định production-like. Ngày này gắn với artifact: Lưu week22-retro.md; commit/push.",
      "guidedTask": "Present one 5-minute design: requirements, diagram, trade-offs, failure/DR, cost and security.",
      "debugTask": "Update flashcards/weak-topic queue and plan next deep work.",
      "evidenceTask": "Lưu week22-retro.md; commit/push."
    },
    "reviewQuestionIds": [
      "p6l1q1",
      "p6l1q2",
      "p6l1q3",
      "p6l1q5",
      "p6l1q6"
    ]
  },
  {
    "id": "d155",
    "dayNumber": 155,
    "week": 23,
    "dayOfWeek": "Mon",
    "phaseId": "p6",
    "title": "Exam strategy: đọc requirement, loại trừ, timebox, flag question, không suy diễn ngoài đề",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Exam strategy: đọc requirement, loại trừ, timebox, flag question, không suy diễn ngoài đề. Phần lab biến kiến thức thành thao tác kiểm chứng được: Làm 30 câu warm-up theo domain; build error taxonomy: knowledge, keyword, trade-off, time management. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Exam strategy: đọc requirement, loại trừ, timebox, flag question, không suy diễn ngoài đề.",
        "Lab: Làm 30 câu warm-up theo domain; build error taxonomy: knowledge, keyword, trade-off, time management.",
        "Debug/review: Write personal exam protocol for 65-question mock.",
        "Evidence: Lưu exam-strategy.md."
      ],
      "sources": [
        {
          "title": "AWS Certified Solutions Architect - Associate exam guide",
          "org": "AWS Training and Certification",
          "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "AWS Solutions Architect Associate Certification Course",
          "org": "freeCodeCamp.org",
          "url": "https://www.youtube.com/watch?v=c3Cn4xYfxJY",
          "type": "video",
          "verified": false
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l1",
      "realWorldContext": "SAA-C03 kiểm tra trade-off kiến trúc; học theo case giúp nối chứng chỉ với quyết định production-like. Ngày này gắn với artifact: Lưu exam-strategy.md.",
      "guidedTask": "Làm 30 câu warm-up theo domain; build error taxonomy: knowledge, keyword, trade-off, time management.",
      "debugTask": "Write personal exam protocol for 65-question mock.",
      "evidenceTask": "Lưu exam-strategy.md."
    },
    "reviewQuestionIds": [
      "p6l1q1",
      "p6l1q2",
      "p6l1q3",
      "p6l1q5",
      "p6l1q6"
    ]
  },
  {
    "id": "d156",
    "dayNumber": 156,
    "week": 23,
    "dayOfWeek": "Tue",
    "phaseId": "p6",
    "title": "Full mock 1: endurance, timing and evidence collection",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Full mock 1: endurance, timing and evidence collection. Phần lab biến kiến thức thành thao tác kiểm chứng được: Làm 65 câu trong 90–130 phút không tra cứu; lưu score theo domain and unanswered/guessed list. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Full mock 1: endurance, timing and evidence collection.",
        "Lab: Làm 65 câu trong 90–130 phút không tra cứu; lưu score theo domain and unanswered/guessed list.",
        "Debug/review: Không học thêm sau exam; chỉ phân loại error để tránh bias.",
        "Evidence: Lưu raw result and mock-01-index.md."
      ],
      "sources": [
        {
          "title": "AWS Certified Solutions Architect - Associate exam guide",
          "org": "AWS Training and Certification",
          "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "AWS Solutions Architect Associate Certification Course",
          "org": "freeCodeCamp.org",
          "url": "https://www.youtube.com/watch?v=c3Cn4xYfxJY",
          "type": "video",
          "verified": false
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l1",
      "realWorldContext": "SAA-C03 kiểm tra trade-off kiến trúc; học theo case giúp nối chứng chỉ với quyết định production-like. Ngày này gắn với artifact: Lưu raw result and mock-01-index.md.",
      "guidedTask": "Làm 65 câu trong 90–130 phút không tra cứu; lưu score theo domain and unanswered/guessed list.",
      "debugTask": "Không học thêm sau exam; chỉ phân loại error để tránh bias.",
      "evidenceTask": "Lưu raw result and mock-01-index.md."
    },
    "reviewQuestionIds": [
      "p6l1q1",
      "p6l1q2",
      "p6l1q3",
      "p6l1q5",
      "p6l1q6"
    ]
  },
  {
    "id": "d157",
    "dayNumber": 157,
    "week": 23,
    "dayOfWeek": "Wed",
    "phaseId": "p6",
    "title": "Mock 1 deep review: every wrong answer needs a principle, not only correct option",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Mock 1 deep review: every wrong answer needs a principle, not only correct option. Phần lab biến kiến thức thành thao tác kiểm chứng được: Review 65 questions; choose top 10 weak concepts and reproduce 2 with architecture/lab. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Mock 1 deep review: every wrong answer needs a principle, not only correct option.",
        "Lab: Review 65 questions; choose top 10 weak concepts and reproduce 2 with architecture/lab.",
        "Debug/review: Create flashcards including why tempting distractors are wrong.",
        "Evidence: Lưu mock-01-review.md."
      ],
      "sources": [
        {
          "title": "AWS Certified Solutions Architect - Associate exam guide",
          "org": "AWS Training and Certification",
          "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "AWS Solutions Architect Associate Certification Course",
          "org": "freeCodeCamp.org",
          "url": "https://www.youtube.com/watch?v=c3Cn4xYfxJY",
          "type": "video",
          "verified": false
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l1",
      "realWorldContext": "SAA-C03 kiểm tra trade-off kiến trúc; học theo case giúp nối chứng chỉ với quyết định production-like. Ngày này gắn với artifact: Lưu mock-01-review.md.",
      "guidedTask": "Review 65 questions; choose top 10 weak concepts and reproduce 2 with architecture/lab.",
      "debugTask": "Create flashcards including why tempting distractors are wrong.",
      "evidenceTask": "Lưu mock-01-review.md."
    },
    "reviewQuestionIds": [
      "p6l1q1",
      "p6l1q2",
      "p6l1q3",
      "p6l1q5",
      "p6l1q6"
    ]
  },
  {
    "id": "d158",
    "dayNumber": 158,
    "week": 23,
    "dayOfWeek": "Thu",
    "phaseId": "p6",
    "title": "Remediation compute/network/storage based on mock 1",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Remediation compute/network/storage based on mock 1. Phần lab biến kiến thức thành thao tác kiểm chứng được: Study 3 weak topics for 45 min each; draw and explain 3 scenarios from blank page. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Remediation compute/network/storage based on mock 1.",
        "Lab: Study 3 weak topics for 45 min each; draw and explain 3 scenarios from blank page.",
        "Debug/review: Retest 15 questions on same domains; target evidence of improvement.",
        "Evidence: Lưu remediation-01.md."
      ],
      "sources": [
        {
          "title": "AWS Certified Solutions Architect - Associate exam guide",
          "org": "AWS Training and Certification",
          "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "AWS Solutions Architect Associate Certification Course",
          "org": "freeCodeCamp.org",
          "url": "https://www.youtube.com/watch?v=c3Cn4xYfxJY",
          "type": "video",
          "verified": false
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l1",
      "realWorldContext": "SAA-C03 kiểm tra trade-off kiến trúc; học theo case giúp nối chứng chỉ với quyết định production-like. Ngày này gắn với artifact: Lưu remediation-01.md.",
      "guidedTask": "Study 3 weak topics for 45 min each; draw and explain 3 scenarios from blank page.",
      "debugTask": "Retest 15 questions on same domains; target evidence of improvement.",
      "evidenceTask": "Lưu remediation-01.md."
    },
    "reviewQuestionIds": [
      "p6l1q1",
      "p6l1q2",
      "p6l1q3",
      "p6l1q5",
      "p6l1q6"
    ]
  },
  {
    "id": "d159",
    "dayNumber": 159,
    "week": 23,
    "dayOfWeek": "Fri",
    "phaseId": "p6",
    "title": "Remediation security/database/serverless based on mock 1",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Remediation security/database/serverless based on mock 1. Phần lab biến kiến thức thành thao tác kiểm chứng được: Study 3 weak topics; update decision cards; run one relevant Project lab/checklist. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Remediation security/database/serverless based on mock 1.",
        "Lab: Study 3 weak topics; update decision cards; run one relevant Project lab/checklist.",
        "Debug/review: Retest 15 questions and compare accuracy with day 158.",
        "Evidence: Lưu remediation-02.md."
      ],
      "sources": [
        {
          "title": "AWS Certified Solutions Architect - Associate exam guide",
          "org": "AWS Training and Certification",
          "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "AWS Solutions Architect Associate Certification Course",
          "org": "freeCodeCamp.org",
          "url": "https://www.youtube.com/watch?v=c3Cn4xYfxJY",
          "type": "video",
          "verified": false
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l1",
      "realWorldContext": "SAA-C03 kiểm tra trade-off kiến trúc; học theo case giúp nối chứng chỉ với quyết định production-like. Ngày này gắn với artifact: Lưu remediation-02.md.",
      "guidedTask": "Study 3 weak topics; update decision cards; run one relevant Project lab/checklist.",
      "debugTask": "Retest 15 questions and compare accuracy with day 158.",
      "evidenceTask": "Lưu remediation-02.md."
    },
    "reviewQuestionIds": [
      "p6l1q1",
      "p6l1q2",
      "p6l1q3",
      "p6l1q5",
      "p6l1q6"
    ]
  },
  {
    "id": "d160",
    "dayNumber": 160,
    "week": 23,
    "dayOfWeek": "Sat",
    "phaseId": "p6",
    "title": "Full mock 2 and score trend",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Full mock 2 and score trend. Phần lab biến kiến thức thành thao tác kiểm chứng được: Làm mock 2 timed; compare overall/domain score, time and error type to mock 1. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Full mock 2 and score trend.",
        "Lab: Làm mock 2 timed; compare overall/domain score, time and error type to mock 1.",
        "Debug/review: Identify whether improvement is stable or topic-specific.",
        "Evidence: Lưu mock-02-index.md."
      ],
      "sources": [
        {
          "title": "AWS Certified Solutions Architect - Associate exam guide",
          "org": "AWS Training and Certification",
          "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "AWS Solutions Architect Associate Certification Course",
          "org": "freeCodeCamp.org",
          "url": "https://www.youtube.com/watch?v=c3Cn4xYfxJY",
          "type": "video",
          "verified": false
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l1",
      "realWorldContext": "SAA-C03 kiểm tra trade-off kiến trúc; học theo case giúp nối chứng chỉ với quyết định production-like. Ngày này gắn với artifact: Lưu mock-02-index.md.",
      "guidedTask": "Làm mock 2 timed; compare overall/domain score, time and error type to mock 1.",
      "debugTask": "Identify whether improvement is stable or topic-specific.",
      "evidenceTask": "Lưu mock-02-index.md."
    },
    "reviewQuestionIds": [
      "p6l1q1",
      "p6l1q2",
      "p6l1q3",
      "p6l1q5",
      "p6l1q6"
    ]
  },
  {
    "id": "d161",
    "dayNumber": 161,
    "week": 23,
    "dayOfWeek": "Sun",
    "phaseId": "p6",
    "title": "Readiness decision and week review",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Readiness decision and week review. Phần lab biến kiến thức thành thao tác kiểm chứng được: Review mock 2; set exam date only if ≥82% consistently and weak topics have explanations/labs; otherwise schedule remediation. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Readiness decision and week review.",
        "Lab: Review mock 2; set exam date only if ≥82% consistently and weak topics have explanations/labs; otherwise schedule remediation.",
        "Debug/review: Update Plan A (ready) / Plan B (2 more weeks) without shame or shortcut.",
        "Evidence: Lưu saa-readiness-decision.md; commit/push."
      ],
      "sources": [
        {
          "title": "AWS Certified Solutions Architect - Associate exam guide",
          "org": "AWS Training and Certification",
          "url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "AWS Solutions Architect Associate Certification Course",
          "org": "freeCodeCamp.org",
          "url": "https://www.youtube.com/watch?v=c3Cn4xYfxJY",
          "type": "video",
          "verified": false
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l1",
      "realWorldContext": "SAA-C03 kiểm tra trade-off kiến trúc; học theo case giúp nối chứng chỉ với quyết định production-like. Ngày này gắn với artifact: Lưu saa-readiness-decision.md; commit/push.",
      "guidedTask": "Review mock 2; set exam date only if ≥82% consistently and weak topics have explanations/labs; otherwise schedule remediation.",
      "debugTask": "Update Plan A (ready) / Plan B (2 more weeks) without shame or shortcut.",
      "evidenceTask": "Lưu saa-readiness-decision.md; commit/push."
    },
    "reviewQuestionIds": [
      "p6l1q1",
      "p6l1q2",
      "p6l1q3",
      "p6l1q5",
      "p6l1q6"
    ]
  },
  {
    "id": "d162",
    "dayNumber": 162,
    "week": 24,
    "dayOfWeek": "Mon",
    "phaseId": "p6",
    "title": "Portfolio evidence standard: problem, constraints, architecture, implementation, verification, failure/recovery, trade-off",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Portfolio evidence standard: problem, constraints, architecture, implementation, verification, failure/recovery, trade-off. Phần lab biến kiến thức thành thao tác kiểm chứng được: Audit Project 1 repo against rubric; create issue list for missing README, diagram, run command, evidence, teardown. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Portfolio evidence standard: problem, constraints, architecture, implementation, verification, failure/recovery, trade-off.",
        "Lab: Audit Project 1 repo against rubric; create issue list for missing README, diagram, run command, evidence, teardown.",
        "Debug/review: Fix highest-impact gap and verify clone instructions in clean terminal.",
        "Evidence: Lưu portfolio-audit-project1.md."
      ],
      "sources": [
        {
          "title": "AWS Well-Architected Framework",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l2",
      "realWorldContext": "Portfolio phải có runbook, diagram, lệnh tái tạo và teardown; đó là bằng chứng nhà tuyển dụng có thể kiểm tra. Ngày này gắn với artifact: Lưu portfolio-audit-project1.md.",
      "guidedTask": "Audit Project 1 repo against rubric; create issue list for missing README, diagram, run command, evidence, teardown.",
      "debugTask": "Fix highest-impact gap and verify clone instructions in clean terminal.",
      "evidenceTask": "Lưu portfolio-audit-project1.md."
    },
    "reviewQuestionIds": [
      "p6l2q1",
      "p6l2q2",
      "p6l2q3",
      "p6l2q5",
      "p6l2q6"
    ]
  },
  {
    "id": "d163",
    "dayNumber": 163,
    "week": 24,
    "dayOfWeek": "Tue",
    "phaseId": "p6",
    "title": "Technical README: audience, prerequisites, quickstart, diagram, configuration, verification, troubleshooting, cost and cleanup",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Technical README: audience, prerequisites, quickstart, diagram, configuration, verification, troubleshooting, cost and cleanup. Phần lab biến kiến thức thành thao tác kiểm chứng được: Rewrite Project 1 README with reproducible commands and reality labels; remove copy/paste boilerplate. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Technical README: audience, prerequisites, quickstart, diagram, configuration, verification, troubleshooting, cost and cleanup.",
        "Lab: Rewrite Project 1 README with reproducible commands and reality labels; remove copy/paste boilerplate.",
        "Debug/review: Ask: Can recruiter see the operational story in 90 seconds?.",
        "Evidence: Lưu/readme change; screenshot rendered Markdown."
      ],
      "sources": [
        {
          "title": "AWS Well-Architected Framework",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l2",
      "realWorldContext": "Portfolio phải có runbook, diagram, lệnh tái tạo và teardown; đó là bằng chứng nhà tuyển dụng có thể kiểm tra. Ngày này gắn với artifact: Lưu/readme change; screenshot rendered Markdown.",
      "guidedTask": "Rewrite Project 1 README with reproducible commands and reality labels; remove copy/paste boilerplate.",
      "debugTask": "Ask: Can recruiter see the operational story in 90 seconds?.",
      "evidenceTask": "Lưu/readme change; screenshot rendered Markdown."
    },
    "reviewQuestionIds": [
      "p6l2q1",
      "p6l2q2",
      "p6l2q3",
      "p6l2q5",
      "p6l2q6"
    ]
  },
  {
    "id": "d164",
    "dayNumber": 164,
    "week": 24,
    "dayOfWeek": "Wed",
    "phaseId": "p6",
    "title": "Architecture diagrams: C4-ish context/container, AWS icons/Mermaid, trust boundary, data flow, failure/observability",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Architecture diagrams: C4-ish context/container, AWS icons/Mermaid, trust boundary, data flow, failure/observability. Phần lab biến kiến thức thành thao tác kiểm chứng được: Create/refine diagrams for Project 1 and Project 2; add legend and arrow meaning. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Architecture diagrams: C4-ish context/container, AWS icons/Mermaid, trust boundary, data flow, failure/observability.",
        "Lab: Create/refine diagrams for Project 1 and Project 2; add legend and arrow meaning.",
        "Debug/review: Check diagram matches code/resources and update mismatch rather than decorate.",
        "Evidence: Lưu diagram files and verification note."
      ],
      "sources": [
        {
          "title": "AWS Well-Architected Framework",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l2",
      "realWorldContext": "Portfolio phải có runbook, diagram, lệnh tái tạo và teardown; đó là bằng chứng nhà tuyển dụng có thể kiểm tra. Ngày này gắn với artifact: Lưu diagram files and verification note.",
      "guidedTask": "Create/refine diagrams for Project 1 and Project 2; add legend and arrow meaning.",
      "debugTask": "Check diagram matches code/resources and update mismatch rather than decorate.",
      "evidenceTask": "Lưu diagram files and verification note."
    },
    "reviewQuestionIds": [
      "p6l2q1",
      "p6l2q2",
      "p6l2q3",
      "p6l2q5",
      "p6l2q6"
    ]
  },
  {
    "id": "d165",
    "dayNumber": 165,
    "week": 24,
    "dayOfWeek": "Thu",
    "phaseId": "p6",
    "title": "Project 2 evidence: modules, plan review, CI pipeline, state/security decisions and destroy",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Project 2 evidence: modules, plan review, CI pipeline, state/security decisions and destroy. Phần lab biến kiến thức thành thao tác kiểm chứng được: Audit/fix Project 2 README; add module examples, CI screenshot/link, plan review narrative and safe teardown. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Project 2 evidence: modules, plan review, CI pipeline, state/security decisions and destroy.",
        "Lab: Audit/fix Project 2 README; add module examples, CI screenshot/link, plan review narrative and safe teardown.",
        "Debug/review: Run fmt/validate/plan and record version/command evidence.",
        "Evidence: Lưu portfolio-audit-project2.md."
      ],
      "sources": [
        {
          "title": "AWS Well-Architected Framework",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l2",
      "realWorldContext": "Portfolio phải có runbook, diagram, lệnh tái tạo và teardown; đó là bằng chứng nhà tuyển dụng có thể kiểm tra. Ngày này gắn với artifact: Lưu portfolio-audit-project2.md.",
      "guidedTask": "Audit/fix Project 2 README; add module examples, CI screenshot/link, plan review narrative and safe teardown.",
      "debugTask": "Run fmt/validate/plan and record version/command evidence.",
      "evidenceTask": "Lưu portfolio-audit-project2.md."
    },
    "reviewQuestionIds": [
      "p6l2q1",
      "p6l2q2",
      "p6l2q3",
      "p6l2q5",
      "p6l2q6"
    ]
  },
  {
    "id": "d166",
    "dayNumber": 166,
    "week": 24,
    "dayOfWeek": "Fri",
    "phaseId": "p6",
    "title": "Project 3 evidence: Kubernetes manifests/chart, rollout/rollback, observability and local vs EKS scope",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Project 3 evidence: Kubernetes manifests/chart, rollout/rollback, observability and local vs EKS scope. Phần lab biến kiến thức thành thao tác kiểm chứng được: Audit/fix Project 3 README; add debug scenario logs/commands, dashboard evidence and resource cleanup. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Project 3 evidence: Kubernetes manifests/chart, rollout/rollback, observability and local vs EKS scope.",
        "Lab: Audit/fix Project 3 README; add debug scenario logs/commands, dashboard evidence and resource cleanup.",
        "Debug/review: Run local kind demo from scratch or state exactly what blocks it.",
        "Evidence: Lưu portfolio-audit-project3.md."
      ],
      "sources": [
        {
          "title": "AWS Well-Architected Framework",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l2",
      "realWorldContext": "Portfolio phải có runbook, diagram, lệnh tái tạo và teardown; đó là bằng chứng nhà tuyển dụng có thể kiểm tra. Ngày này gắn với artifact: Lưu portfolio-audit-project3.md.",
      "guidedTask": "Audit/fix Project 3 README; add debug scenario logs/commands, dashboard evidence and resource cleanup.",
      "debugTask": "Run local kind demo from scratch or state exactly what blocks it.",
      "evidenceTask": "Lưu portfolio-audit-project3.md."
    },
    "reviewQuestionIds": [
      "p6l2q1",
      "p6l2q2",
      "p6l2q3",
      "p6l2q5",
      "p6l2q6"
    ]
  },
  {
    "id": "d167",
    "dayNumber": 167,
    "week": 24,
    "dayOfWeek": "Sat",
    "phaseId": "p6",
    "title": "GitHub profile, pinned repos, contribution quality, technical writing/blog and demo video principles",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào GitHub profile, pinned repos, contribution quality, technical writing/blog and demo video principles. Phần lab biến kiến thức thành thao tác kiểm chứng được: Write GitHub profile README outline and one Vietnamese/English short technical post from a real incident/lab. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: GitHub profile, pinned repos, contribution quality, technical writing/blog and demo video principles.",
        "Lab: Write GitHub profile README outline and one Vietnamese/English short technical post from a real incident/lab.",
        "Debug/review: Record 2–3 minute demo script; no need to publish video until quality/review pass.",
        "Evidence: Lưu github-profile-plan.md, blog draft/script."
      ],
      "sources": [
        {
          "title": "AWS Well-Architected Framework",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l2",
      "realWorldContext": "Portfolio phải có runbook, diagram, lệnh tái tạo và teardown; đó là bằng chứng nhà tuyển dụng có thể kiểm tra. Ngày này gắn với artifact: Lưu github-profile-plan.md, blog draft/script.",
      "guidedTask": "Write GitHub profile README outline and one Vietnamese/English short technical post from a real incident/lab.",
      "debugTask": "Record 2–3 minute demo script; no need to publish video until quality/review pass.",
      "evidenceTask": "Lưu github-profile-plan.md, blog draft/script."
    },
    "reviewQuestionIds": [
      "p6l2q1",
      "p6l2q2",
      "p6l2q3",
      "p6l2q5",
      "p6l2q6"
    ]
  },
  {
    "id": "d168",
    "dayNumber": 168,
    "week": 24,
    "dayOfWeek": "Sun",
    "phaseId": "p6",
    "title": "Portfolio review day: recruiter scan and deep technical scan",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Portfolio review day: recruiter scan and deep technical scan. Phần lab biến kiến thức thành thao tác kiểm chứng được: Simulate 10-minute reviewer: open three repos, follow setup, read diagram/runbook, inspect commits; fix friction. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Portfolio review day: recruiter scan and deep technical scan.",
        "Lab: Simulate 10-minute reviewer: open three repos, follow setup, read diagram/runbook, inspect commits; fix friction.",
        "Debug/review: Update evidence inventory and label each item verified/local/simulated.",
        "Evidence: Lưu portfolio-final-review.md; commit/push."
      ],
      "sources": [
        {
          "title": "AWS Well-Architected Framework",
          "org": "AWS Docs",
          "url": "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l2",
      "realWorldContext": "Portfolio phải có runbook, diagram, lệnh tái tạo và teardown; đó là bằng chứng nhà tuyển dụng có thể kiểm tra. Ngày này gắn với artifact: Lưu portfolio-final-review.md; commit/push.",
      "guidedTask": "Simulate 10-minute reviewer: open three repos, follow setup, read diagram/runbook, inspect commits; fix friction.",
      "debugTask": "Update evidence inventory and label each item verified/local/simulated.",
      "evidenceTask": "Lưu portfolio-final-review.md; commit/push."
    },
    "reviewQuestionIds": [
      "p6l2q1",
      "p6l2q2",
      "p6l2q3",
      "p6l2q5",
      "p6l2q6"
    ]
  },
  {
    "id": "d169",
    "dayNumber": 169,
    "week": 25,
    "dayOfWeek": "Mon",
    "phaseId": "p6",
    "title": "Job targeting: bridge roles, must-have vs nice-to-have, evidence mapping and salary/level reality",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Job targeting: bridge roles, must-have vs nice-to-have, evidence mapping and salary/level reality. Phần lab biến kiến thức thành thao tác kiểm chứng được: Collect 10 JD recent relevant HCM/remote; extract common skills, on-call/English requirements and gaps. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Job targeting: bridge roles, must-have vs nice-to-have, evidence mapping and salary/level reality.",
        "Lab: Collect 10 JD recent relevant HCM/remote; extract common skills, on-call/English requirements and gaps.",
        "Debug/review: Create keyword matrix mapping each skill to repo/lab/runbook evidence.",
        "Evidence: Lưu jd-keyword-matrix.md."
      ],
      "sources": [
        {
          "title": "AWS Cloud Career Resources",
          "org": "AWS",
          "url": "https://aws.amazon.com/training/career-paths/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l4",
      "realWorldContext": "Ứng tuyển hiệu quả cần CV/LinkedIn gắn JD, application tracker và follow-up có ngày; không rải CV chung chung. Ngày này gắn với artifact: Lưu jd-keyword-matrix.md.",
      "guidedTask": "Collect 10 JD recent relevant HCM/remote; extract common skills, on-call/English requirements and gaps.",
      "debugTask": "Create keyword matrix mapping each skill to repo/lab/runbook evidence.",
      "evidenceTask": "Lưu jd-keyword-matrix.md."
    },
    "reviewQuestionIds": [
      "p6l4q1",
      "p6l4q2",
      "p6l4q3",
      "p6l4q5",
      "p6l4q6"
    ]
  },
  {
    "id": "d170",
    "dayNumber": 170,
    "week": 25,
    "dayOfWeek": "Tue",
    "phaseId": "p6",
    "title": "CV one-page structure: headline, summary, skills, experience, projects, impact and ATS-friendly wording",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào CV one-page structure: headline, summary, skills, experience, projects, impact and ATS-friendly wording. Phần lab biến kiến thức thành thao tác kiểm chứng được: Draft CV tailored Junior DevOps/CloudOps using real IT Ops + portfolio evidence; quantify only verifiable impact. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: CV one-page structure: headline, summary, skills, experience, projects, impact and ATS-friendly wording.",
        "Lab: Draft CV tailored Junior DevOps/CloudOps using real IT Ops + portfolio evidence; quantify only verifiable impact.",
        "Debug/review: Review for vague claims (‘expert’, ‘production’) and replace with artifact/achievement.",
        "Evidence: Lưu cv-cloud-devops-v1.md/pdf if rendering is available."
      ],
      "sources": [
        {
          "title": "AWS Cloud Career Resources",
          "org": "AWS",
          "url": "https://aws.amazon.com/training/career-paths/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l4",
      "realWorldContext": "Ứng tuyển hiệu quả cần CV/LinkedIn gắn JD, application tracker và follow-up có ngày; không rải CV chung chung. Ngày này gắn với artifact: Lưu cv-cloud-devops-v1.md/pdf if rendering is available.",
      "guidedTask": "Draft CV tailored Junior DevOps/CloudOps using real IT Ops + portfolio evidence; quantify only verifiable impact.",
      "debugTask": "Review for vague claims (‘expert’, ‘production’) and replace with artifact/achievement.",
      "evidenceTask": "Lưu cv-cloud-devops-v1.md/pdf if rendering is available."
    },
    "reviewQuestionIds": [
      "p6l4q1",
      "p6l4q2",
      "p6l4q3",
      "p6l4q5",
      "p6l4q6"
    ]
  },
  {
    "id": "d171",
    "dayNumber": 171,
    "week": 25,
    "dayOfWeek": "Wed",
    "phaseId": "p6",
    "title": "Project bullets and STAR framing: action, tool, scope, result, trade-off",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Project bullets and STAR framing: action, tool, scope, result, trade-off. Phần lab biến kiến thức thành thao tác kiểm chứng được: Write 3 bullets each for Projects 1–3 and 5 IT Ops achievements; link GitHub where appropriate. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Project bullets and STAR framing: action, tool, scope, result, trade-off.",
        "Lab: Write 3 bullets each for Projects 1–3 and 5 IT Ops achievements; link GitHub where appropriate.",
        "Debug/review: Run 30-second aloud test: each bullet understandable and defensible?.",
        "Evidence: Lưu cv-project-bullets.md."
      ],
      "sources": [
        {
          "title": "AWS Cloud Career Resources",
          "org": "AWS",
          "url": "https://aws.amazon.com/training/career-paths/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l4",
      "realWorldContext": "Ứng tuyển hiệu quả cần CV/LinkedIn gắn JD, application tracker và follow-up có ngày; không rải CV chung chung. Ngày này gắn với artifact: Lưu cv-project-bullets.md.",
      "guidedTask": "Write 3 bullets each for Projects 1–3 and 5 IT Ops achievements; link GitHub where appropriate.",
      "debugTask": "Run 30-second aloud test: each bullet understandable and defensible?.",
      "evidenceTask": "Lưu cv-project-bullets.md."
    },
    "reviewQuestionIds": [
      "p6l4q1",
      "p6l4q2",
      "p6l4q3",
      "p6l4q5",
      "p6l4q6"
    ]
  },
  {
    "id": "d172",
    "dayNumber": 172,
    "week": 25,
    "dayOfWeek": "Thu",
    "phaseId": "p6",
    "title": "LinkedIn profile: headline, About, Featured, skills, open-to-work privacy and recruiter readability",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào LinkedIn profile: headline, About, Featured, skills, open-to-work privacy and recruiter readability. Phần lab biến kiến thức thành thao tác kiểm chứng được: Update/draft profile text aligned to CV; add featured GitHub/demo evidence rather than generic certificate claims. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: LinkedIn profile: headline, About, Featured, skills, open-to-work privacy and recruiter readability.",
        "Lab: Update/draft profile text aligned to CV; add featured GitHub/demo evidence rather than generic certificate claims.",
        "Debug/review: Prepare connection note/follow-up template that is specific and respectful.",
        "Evidence: Lưu linkedin-profile-copy.md."
      ],
      "sources": [
        {
          "title": "AWS Cloud Career Resources",
          "org": "AWS",
          "url": "https://aws.amazon.com/training/career-paths/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l4",
      "realWorldContext": "Ứng tuyển hiệu quả cần CV/LinkedIn gắn JD, application tracker và follow-up có ngày; không rải CV chung chung. Ngày này gắn với artifact: Lưu linkedin-profile-copy.md.",
      "guidedTask": "Update/draft profile text aligned to CV; add featured GitHub/demo evidence rather than generic certificate claims.",
      "debugTask": "Prepare connection note/follow-up template that is specific and respectful.",
      "evidenceTask": "Lưu linkedin-profile-copy.md."
    },
    "reviewQuestionIds": [
      "p6l4q1",
      "p6l4q2",
      "p6l4q3",
      "p6l4q5",
      "p6l4q6"
    ]
  },
  {
    "id": "d173",
    "dayNumber": 173,
    "week": 25,
    "dayOfWeek": "Fri",
    "phaseId": "p6",
    "title": "Application workflow: job source, JD snapshot, tailoring, CV version, contacts, follow-up, outcome and learning",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Application workflow: job source, JD snapshot, tailoring, CV version, contacts, follow-up, outcome and learning. Phần lab biến kiến thức thành thao tác kiểm chứng được: Use CloudOps Duo tracker or applications.csv; add first 5 quality jobs and tailor 2 CV summaries. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Application workflow: job source, JD snapshot, tailoring, CV version, contacts, follow-up, outcome and learning.",
        "Lab: Use CloudOps Duo tracker or applications.csv; add first 5 quality jobs and tailor 2 CV summaries.",
        "Debug/review: Set follow-up date and next action for each; avoid mass-apply without notes.",
        "Evidence: Lưu applications.csv or tracker export."
      ],
      "sources": [
        {
          "title": "AWS Cloud Career Resources",
          "org": "AWS",
          "url": "https://aws.amazon.com/training/career-paths/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l4",
      "realWorldContext": "Ứng tuyển hiệu quả cần CV/LinkedIn gắn JD, application tracker và follow-up có ngày; không rải CV chung chung. Ngày này gắn với artifact: Lưu applications.csv or tracker export.",
      "guidedTask": "Use CloudOps Duo tracker or applications.csv; add first 5 quality jobs and tailor 2 CV summaries.",
      "debugTask": "Set follow-up date and next action for each; avoid mass-apply without notes.",
      "evidenceTask": "Lưu applications.csv or tracker export."
    },
    "reviewQuestionIds": [
      "p6l4q1",
      "p6l4q2",
      "p6l4q3",
      "p6l4q5",
      "p6l4q6"
    ]
  },
  {
    "id": "d174",
    "dayNumber": 174,
    "week": 25,
    "dayOfWeek": "Sat",
    "phaseId": "p6",
    "title": "Cover note/email and recruiter communication, salary expectation and availability framing",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Cover note/email and recruiter communication, salary expectation and availability framing. Phần lab biến kiến thức thành thao tác kiểm chứng được: Write 2 concise templates: referral/recruiter reply and direct application; personalize for 2 actual JDs. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Cover note/email and recruiter communication, salary expectation and availability framing.",
        "Lab: Write 2 concise templates: referral/recruiter reply and direct application; personalize for 2 actual JDs.",
        "Debug/review: Practice salary response: target range plus value/evidence, no false certainty.",
        "Evidence: Lưu application-communication-templates.md."
      ],
      "sources": [
        {
          "title": "AWS Cloud Career Resources",
          "org": "AWS",
          "url": "https://aws.amazon.com/training/career-paths/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l4",
      "realWorldContext": "Ứng tuyển hiệu quả cần CV/LinkedIn gắn JD, application tracker và follow-up có ngày; không rải CV chung chung. Ngày này gắn với artifact: Lưu application-communication-templates.md.",
      "guidedTask": "Write 2 concise templates: referral/recruiter reply and direct application; personalize for 2 actual JDs.",
      "debugTask": "Practice salary response: target range plus value/evidence, no false certainty.",
      "evidenceTask": "Lưu application-communication-templates.md."
    },
    "reviewQuestionIds": [
      "p6l4q1",
      "p6l4q2",
      "p6l4q3",
      "p6l4q5",
      "p6l4q6"
    ]
  },
  {
    "id": "d175",
    "dayNumber": 175,
    "week": 25,
    "dayOfWeek": "Sun",
    "phaseId": "p6",
    "title": "Week review: quality pipeline and feedback loop",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Week review: quality pipeline and feedback loop. Phần lab biến kiến thức thành thao tác kiểm chứng được: Submit/finalize 5 applications only after CV/JD/repo link check; update tracker and identify skill gaps appearing repeatedly. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Week review: quality pipeline and feedback loop.",
        "Lab: Submit/finalize 5 applications only after CV/JD/repo link check; update tracker and identify skill gaps appearing repeatedly.",
        "Debug/review: Schedule next week interview drills around real JD gaps.",
        "Evidence: Lưu week25-job-search-review.md; commit/push private data only if safe."
      ],
      "sources": [
        {
          "title": "AWS Cloud Career Resources",
          "org": "AWS",
          "url": "https://aws.amazon.com/training/career-paths/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l4",
      "realWorldContext": "Ứng tuyển hiệu quả cần CV/LinkedIn gắn JD, application tracker và follow-up có ngày; không rải CV chung chung. Ngày này gắn với artifact: Lưu week25-job-search-review.md; commit/push private data only if safe.",
      "guidedTask": "Submit/finalize 5 applications only after CV/JD/repo link check; update tracker and identify skill gaps appearing repeatedly.",
      "debugTask": "Schedule next week interview drills around real JD gaps.",
      "evidenceTask": "Lưu week25-job-search-review.md; commit/push private data only if safe."
    },
    "reviewQuestionIds": [
      "p6l4q1",
      "p6l4q2",
      "p6l4q3",
      "p6l4q5",
      "p6l4q6"
    ]
  },
  {
    "id": "d176",
    "dayNumber": 176,
    "week": 26,
    "dayOfWeek": "Mon",
    "phaseId": "p6",
    "title": "Linux/network interview: load, disk, service, DNS, port, SSH and incident triage",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Linux/network interview: load, disk, service, DNS, port, SSH and incident triage. Phần lab biến kiến thức thành thao tác kiểm chứng được: Answer 10 questions aloud; run 3 live troubleshooting scenarios in WSL/local and record first commands/evidence. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Linux/network interview: load, disk, service, DNS, port, SSH and incident triage.",
        "Lab: Answer 10 questions aloud; run 3 live troubleshooting scenarios in WSL/local and record first commands/evidence.",
        "Debug/review: Rewrite weak answers in STAR/diagnostic format without scripted jargon.",
        "Evidence: Lưu interview-linux-network.md."
      ],
      "sources": [
        {
          "title": "AWS Architecture Center",
          "org": "AWS",
          "url": "https://aws.amazon.com/architecture/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l3",
      "realWorldContext": "Phỏng vấn kỹ thuật cần trả lời theo Situation-Task-Action-Result kèm lệnh, dữ kiện và trade-off, không trả lời như thuộc lòng định nghĩa. Ngày này gắn với artifact: Lưu interview-linux-network.md.",
      "guidedTask": "Answer 10 questions aloud; run 3 live troubleshooting scenarios in WSL/local and record first commands/evidence.",
      "debugTask": "Rewrite weak answers in STAR/diagnostic format without scripted jargon.",
      "evidenceTask": "Lưu interview-linux-network.md."
    },
    "reviewQuestionIds": [
      "p6l3q1",
      "p6l3q2",
      "p6l3q3",
      "p6l3q5",
      "p6l3q6"
    ]
  },
  {
    "id": "d177",
    "dayNumber": 177,
    "week": 26,
    "dayOfWeek": "Tue",
    "phaseId": "p6",
    "title": "Docker/CI/CD interview: image, compose, logging, security, pipeline failure, rollback and artifacts",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Docker/CI/CD interview: image, compose, logging, security, pipeline failure, rollback and artifacts. Phần lab biến kiến thức thành thao tác kiểm chứng được: Answer 10 questions; demonstrate container crash → log → fix → CI check in one coherent flow. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Docker/CI/CD interview: image, compose, logging, security, pipeline failure, rollback and artifacts.",
        "Lab: Answer 10 questions; demonstrate container crash → log → fix → CI check in one coherent flow.",
        "Debug/review: Identify one trade-off in every answer, not only correct command.",
        "Evidence: Lưu interview-docker-cicd.md."
      ],
      "sources": [
        {
          "title": "AWS Architecture Center",
          "org": "AWS",
          "url": "https://aws.amazon.com/architecture/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l3",
      "realWorldContext": "Phỏng vấn kỹ thuật cần trả lời theo Situation-Task-Action-Result kèm lệnh, dữ kiện và trade-off, không trả lời như thuộc lòng định nghĩa. Ngày này gắn với artifact: Lưu interview-docker-cicd.md.",
      "guidedTask": "Answer 10 questions; demonstrate container crash → log → fix → CI check in one coherent flow.",
      "debugTask": "Identify one trade-off in every answer, not only correct command.",
      "evidenceTask": "Lưu interview-docker-cicd.md."
    },
    "reviewQuestionIds": [
      "p6l3q1",
      "p6l3q2",
      "p6l3q3",
      "p6l3q5",
      "p6l3q6"
    ]
  },
  {
    "id": "d178",
    "dayNumber": 178,
    "week": 26,
    "dayOfWeek": "Wed",
    "phaseId": "p6",
    "title": "AWS/Terraform interview: VPC, IAM, EC2/S3, HA, state, module, plan/apply/destroy",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào AWS/Terraform interview: VPC, IAM, EC2/S3, HA, state, module, plan/apply/destroy. Phần lab biến kiến thức thành thao tác kiểm chứng được: Answer 10 questions using Project diagrams; recreate EC2 no Internet and Terraform drift scenario explanation. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: AWS/Terraform interview: VPC, IAM, EC2/S3, HA, state, module, plan/apply/destroy.",
        "Lab: Answer 10 questions using Project diagrams; recreate EC2 no Internet and Terraform drift scenario explanation.",
        "Debug/review: Check every claim against actual repo/runbook.",
        "Evidence: Lưu interview-aws-terraform.md."
      ],
      "sources": [
        {
          "title": "AWS Architecture Center",
          "org": "AWS",
          "url": "https://aws.amazon.com/architecture/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l3",
      "realWorldContext": "Phỏng vấn kỹ thuật cần trả lời theo Situation-Task-Action-Result kèm lệnh, dữ kiện và trade-off, không trả lời như thuộc lòng định nghĩa. Ngày này gắn với artifact: Lưu interview-aws-terraform.md.",
      "guidedTask": "Answer 10 questions using Project diagrams; recreate EC2 no Internet and Terraform drift scenario explanation.",
      "debugTask": "Check every claim against actual repo/runbook.",
      "evidenceTask": "Lưu interview-aws-terraform.md."
    },
    "reviewQuestionIds": [
      "p6l3q1",
      "p6l3q2",
      "p6l3q3",
      "p6l3q5",
      "p6l3q6"
    ]
  },
  {
    "id": "d179",
    "dayNumber": 179,
    "week": 26,
    "dayOfWeek": "Thu",
    "phaseId": "p6",
    "title": "Kubernetes/SRE interview: Pod failures, Service/Ingress, HPA, Helm/GitOps, SLI/SLO/alert/DR",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Kubernetes/SRE interview: Pod failures, Service/Ingress, HPA, Helm/GitOps, SLI/SLO/alert/DR. Phần lab biến kiến thức thành thao tác kiểm chứng được: Answer 10 questions; simulate CrashLoopBackOff or Pending and explain describe/logs/rollback sequence. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Kubernetes/SRE interview: Pod failures, Service/Ingress, HPA, Helm/GitOps, SLI/SLO/alert/DR.",
        "Lab: Answer 10 questions; simulate CrashLoopBackOff or Pending and explain describe/logs/rollback sequence.",
        "Debug/review: Write concise 90-second answer for incident/postmortem/backup restore.",
        "Evidence: Lưu interview-k8s-sre.md."
      ],
      "sources": [
        {
          "title": "AWS Architecture Center",
          "org": "AWS",
          "url": "https://aws.amazon.com/architecture/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l3",
      "realWorldContext": "Phỏng vấn kỹ thuật cần trả lời theo Situation-Task-Action-Result kèm lệnh, dữ kiện và trade-off, không trả lời như thuộc lòng định nghĩa. Ngày này gắn với artifact: Lưu interview-k8s-sre.md.",
      "guidedTask": "Answer 10 questions; simulate CrashLoopBackOff or Pending and explain describe/logs/rollback sequence.",
      "debugTask": "Write concise 90-second answer for incident/postmortem/backup restore.",
      "evidenceTask": "Lưu interview-k8s-sre.md."
    },
    "reviewQuestionIds": [
      "p6l3q1",
      "p6l3q2",
      "p6l3q3",
      "p6l3q5",
      "p6l3q6"
    ]
  },
  {
    "id": "d180",
    "dayNumber": 180,
    "week": 26,
    "dayOfWeek": "Fri",
    "phaseId": "p6",
    "title": "Behavioral interview: collaboration, ownership, ambiguity, conflict, learning, incident communication",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Behavioral interview: collaboration, ownership, ambiguity, conflict, learning, incident communication. Phần lab biến kiến thức thành thao tác kiểm chứng được: Prepare 10 STAR stories rooted in IT Ops/labs; practice with timer and ensure Result is honest/measurable. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Behavioral interview: collaboration, ownership, ambiguity, conflict, learning, incident communication.",
        "Lab: Prepare 10 STAR stories rooted in IT Ops/labs; practice with timer and ensure Result is honest/measurable.",
        "Debug/review: Ask yourself follow-up questions a skeptical interviewer would ask.",
        "Evidence: Lưu interview-behavioral-star.md."
      ],
      "sources": [
        {
          "title": "AWS Architecture Center",
          "org": "AWS",
          "url": "https://aws.amazon.com/architecture/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l3",
      "realWorldContext": "Phỏng vấn kỹ thuật cần trả lời theo Situation-Task-Action-Result kèm lệnh, dữ kiện và trade-off, không trả lời như thuộc lòng định nghĩa. Ngày này gắn với artifact: Lưu interview-behavioral-star.md.",
      "guidedTask": "Prepare 10 STAR stories rooted in IT Ops/labs; practice with timer and ensure Result is honest/measurable.",
      "debugTask": "Ask yourself follow-up questions a skeptical interviewer would ask.",
      "evidenceTask": "Lưu interview-behavioral-star.md."
    },
    "reviewQuestionIds": [
      "p6l3q1",
      "p6l3q2",
      "p6l3q3",
      "p6l3q5",
      "p6l3q6"
    ]
  },
  {
    "id": "d181",
    "dayNumber": 181,
    "week": 26,
    "dayOfWeek": "Sat",
    "phaseId": "p6",
    "title": "Mock interview and portfolio walkthrough",
    "budgetMinutes": {
      "theory": 55,
      "lab": 95,
      "review": 30
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Mock interview and portfolio walkthrough. Phần lab biến kiến thức thành thao tác kiểm chứng được: Run 60-minute mock: 20 min CV, 25 min technical, 15 min project demo; record gaps and retry 3 weakest answers. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Mock interview and portfolio walkthrough.",
        "Lab: Run 60-minute mock: 20 min CV, 25 min technical, 15 min project demo; record gaps and retry 3 weakest answers.",
        "Debug/review: Prepare questions to ask interviewer about stack, on-call, deployment/review and success criteria.",
        "Evidence: Lưu mock-interview-01.md."
      ],
      "sources": [
        {
          "title": "AWS Architecture Center",
          "org": "AWS",
          "url": "https://aws.amazon.com/architecture/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l3",
      "realWorldContext": "Phỏng vấn kỹ thuật cần trả lời theo Situation-Task-Action-Result kèm lệnh, dữ kiện và trade-off, không trả lời như thuộc lòng định nghĩa. Ngày này gắn với artifact: Lưu mock-interview-01.md.",
      "guidedTask": "Run 60-minute mock: 20 min CV, 25 min technical, 15 min project demo; record gaps and retry 3 weakest answers.",
      "debugTask": "Prepare questions to ask interviewer about stack, on-call, deployment/review and success criteria.",
      "evidenceTask": "Lưu mock-interview-01.md."
    },
    "reviewQuestionIds": [
      "p6l3q1",
      "p6l3q2",
      "p6l3q3",
      "p6l3q5",
      "p6l3q6"
    ]
  },
  {
    "id": "d182",
    "dayNumber": 182,
    "week": 26,
    "dayOfWeek": "Sun",
    "phaseId": "p6",
    "title": "Final capstone: job-ready evidence and next 30-day operating loop",
    "budgetMinutes": {
      "theory": 25,
      "lab": 65,
      "review": 90
    },
    "theory": {
      "summary": "Hôm nay tập trung vào Final capstone: job-ready evidence and next 30-day operating loop. Phần lab biến kiến thức thành thao tác kiểm chứng được: Demo one incident end-to-end: alert/log → diagnosis → safe fix/rollback → restore/check → postmortem; show 3 repos and job tracker. Kết thúc buổi học bằng tự debug/review, ghi bằng chứng và chỉ đánh dấu xong khi artifact có thể kiểm tra lại.",
      "keyPoints": [
        "Lý thuyết: Final capstone: job-ready evidence and next 30-day operating loop.",
        "Lab: Demo one incident end-to-end: alert/log → diagnosis → safe fix/rollback → restore/check → postmortem; show 3 repos and job tracker.",
        "Debug/review: Create 30-day cadence: 3 applications/week, 2 labs/week, 1 mock/week, portfolio refresh from feedback.",
        "Evidence: Lưu job-ready-capstone.md, next-30-days.md; commit/push milestone."
      ],
      "sources": [
        {
          "title": "AWS Architecture Center",
          "org": "AWS",
          "url": "https://aws.amazon.com/architecture/",
          "type": "doc",
          "verified": true
        },
        {
          "title": "Getting started with AWS identity",
          "org": "AWS Events",
          "url": "https://www.youtube.com/watch?v=Zvz-qYYhvMk",
          "type": "video",
          "verified": true
        },
        {
          "title": "Cloud Engineer 6-month roadmap BCE",
          "org": "Local BCE project",
          "url": "../cloud_engineer_6month_roadmap.md",
          "type": "roadmap",
          "verified": true
        }
      ]
    },
    "lab": {
      "lessonRef": "p6l3",
      "realWorldContext": "Phỏng vấn kỹ thuật cần trả lời theo Situation-Task-Action-Result kèm lệnh, dữ kiện và trade-off, không trả lời như thuộc lòng định nghĩa. Ngày này gắn với artifact: Lưu job-ready-capstone.md, next-30-days.md; commit/push milestone.",
      "guidedTask": "Demo one incident end-to-end: alert/log → diagnosis → safe fix/rollback → restore/check → postmortem; show 3 repos and job tracker.",
      "debugTask": "Create 30-day cadence: 3 applications/week, 2 labs/week, 1 mock/week, portfolio refresh from feedback.",
      "evidenceTask": "Lưu job-ready-capstone.md, next-30-days.md; commit/push milestone."
    },
    "reviewQuestionIds": [
      "p6l3q1",
      "p6l3q2",
      "p6l3q3",
      "p6l3q5",
      "p6l3q6"
    ]
  }
];
  window.CLOUD_APP_DATA = D;
})();
