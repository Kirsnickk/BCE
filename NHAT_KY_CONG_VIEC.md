# NHẬT KÝ CÔNG VIỆC — CloudOps Duo & Cloud Engineer Roadmap

Ngày tạo: 04/08/2026

---

## MỤC TIÊU BAN ĐẦU

Người dùng muốn:
1. Xây dựng lộ trình học thực hành 6 tháng để chuyển từ IT Operations sang Junior Cloud Engineer/DevOps tại TP.HCM, lương mục tiêu 15–25 triệu VND/tháng.
2. Tạo một app học tập kiểu Duolingo với 3 dạng bài (trắc nghiệm, điền từ, xếp từ) bám sát từng phase trong roadmap, dựa trên nội dung từ các kênh YouTube uy tín.

---

## GIAI ĐOẠN 1 — Nghiên cứu thị trường và roadmap

### 1.1. Đọc 7 PDF roadmap gốc

Nguồn: `C:\Users\vandu\Downloads\Road map`

Các file đã đọc và tổng hợp:

- `aws.pdf` — AWS core services, IAM, VPC, compute, storage, databases.
- `devops.pdf` — CI/CD, monitoring, IaC, collaboration tools.
- `docker.pdf` — Container lifecycle, image, registry, Compose.
- `kubernetes.pdf` — Architecture, workload, service, Helm, GitOps.
- `linux.pdf` — Shell, filesystem, process, networking, security.
- `network-engineer.pdf` — OSI, TCP/IP, DNS, routing, firewall.
- `backend.pdf` — API, web server, database, deployment basics.

### 1.2. Nghiên cứu thị trường tuyển dụng Việt Nam 2025–2026

Nguồn dữ liệu đã phân tích: ITviec, TopDev, LinkedIn, job description thực tế tại TP.HCM.

Kết quả nghiên cứu:

- Top kỹ năng JD yêu cầu: Linux (90%), Git (95%), Docker (85%), AWS (80%), CI/CD (75%), Kubernetes (65%), Terraform (60%), Python scripting (55%).
- Mức lương tham khảo: Junior Cloud khoảng 15–22 triệu; Mid khoảng 25–40 triệu VND/tháng.
- Bridge role phù hợp để vào ngành: Junior DevOps, Infrastructure & DevOps, Cloud Operations, System/Infrastructure Engineer.
- Chứng chỉ ưu tiên: AWS Solutions Architect Associate (SAA-C03).

File chi tiết:

```
C:\Users\vandu\Documents\Become Cloud Engineering\cloud_engineer_market_research_addendum.md
```

---

## GIAI ĐOẠN 2 — Xây dựng Roadmap 6 tháng

### 2.1. Thiết kế lộ trình 26 tuần/6 phase

| Phase | Thời gian | Nội dung |
|---|---|---|
| Phase 1 | Tuần 1–4 | Linux, Networking, Git, Docker foundations |
| Phase 2 | Tuần 5–9 | AWS Core: IAM, VPC, EC2, S3, CloudWatch, RDS |
| Phase 3 | Tuần 10–14 | Terraform, GitHub Actions CI/CD, Ansible, Nginx |
| Phase 4 | Tuần 15–19 | Kubernetes: architecture, workload, Helm, GitOps, EKS |
| Phase 5 | Tuần 20–23 | Prometheus, Grafana, logging, incident response, security, DR |
| Phase 6 | Tuần 24–26 | SAA-C03 ôn thi, portfolio, CV, phỏng vấn, ứng tuyển |

### 2.2. Tạo file Markdown roadmap chi tiết (609 dòng)

```
C:\Users\vandu\Documents\Become Cloud Engineering\cloud_engineer_6month_roadmap.md
```

Nội dung bao gồm:
- Tổng quan và yêu cầu thị trường.
- 6 phase chi tiết với mục tiêu, kỹ năng, tool, lab task, checkpoint.
- Portfolio tối thiểu 3 dự án.
- Lịch học hằng tuần gợi ý.

### 2.3. Tạo PDF roadmap 8 trang

Script tạo PDF:

```
C:\Users\vandu\Documents\Become Cloud Engineering\build_cloud_roadmap_pdf.py
```

Output PDF:

```
C:\Users\vandu\Documents\Become Cloud Engineering\cloud_engineer_6month_roadmap.pdf
```

Kích thước: 93,348 bytes (khoảng 8 trang A4).

---

## GIAI ĐOẠN 3 — Nghiên cứu YouTube và tổng hợp nội dung

### 3.1. Tìm kiếm video từ các kênh uy tín

Dùng `yt-dlp` để tìm video theo từng chủ đề:

| Chủ đề | Kênh uy tín tìm được |
|---|---|
| Linux/CLI | The Linux Foundation |
| Git/Pull Request | GitHub |
| Docker | Docker (official) |
| AWS Identity/IAM | AWS Events |
| Terraform | HashiCorp, an IBM Company |
| Kubernetes | CNCF (Cloud Native Computing Foundation) |
| Monitoring | PromLabs |
| AWS SAA-C03 | freeCodeCamp.org |

Tổng cộng hàng trăm video được tìm thấy qua các truy vấn; đã chọn lọc 8 video đại diện.

### 3.2. Truy xuất transcript thực tế

Dùng `youtube-transcript-api` để tải và xác minh transcript:

| Video | Kênh | Transcript |
|---|---|---|
| Beginners Intro to Command-line | The Linux Foundation | Có — 62,382 ký tự |
| How to create a pull request | GitHub | Có — 3,179 ký tự |
| Docker 101: Intro to Docker | Docker | Có — 47,615 ký tự |
| Getting started with AWS identity | AWS Events | Có — 63,166 ký tự |
| Introduction to Terraform | HashiCorp | Có — 24,631 ký tự |
| Kubernetes & Cloud Native Essentials | CNCF | Có — 1,519 ký tự |
| Introduction to Prometheus | PromLabs | Có — 10,820 ký tự |
| AWS SAA-C03 Course | freeCodeCamp.org | Không — subtitles disabled |

File lưu kết quả audit:

```
C:\Users\vandu\Documents\Become Cloud Engineering\youtube_research.json
C:\Users\vandu\Documents\Become Cloud Engineering\youtube_research.md
```

---

## GIAI ĐOẠN 4 — Xây dựng App CloudOps Duo

### 4.1. Thiết kế dữ liệu học tập

Tổng cộng:
- 6 phase bám sát roadmap.
- 24 lesson (4 lesson mỗi phase).
- 72 câu hỏi (3 câu mỗi lesson).
- Mỗi lesson có đủ 3 dạng: trắc nghiệm, điền từ, xếp từ.
- Mỗi lesson có lab thực hành và nút xem video nguồn YouTube.

### 4.2. Viết dữ liệu học tập (data.js)

31,258 bytes — toàn bộ 6 phase, 24 lesson, 72 câu hỏi với câu hỏi, đáp án, giải thích, XP cho từng câu.

### 4.3. Xây dựng giao diện app (3 file)

| File | Mô tả | Kích thước |
|---|---|---|
| `index.html` | Cấu trúc HTML, template | 1,963 bytes |
| `styles.css` | Dark theme, layout 2 cột, responsive | 6,457 bytes |
| `app.js` | Logic toàn bộ: dashboard, lesson, 3 dạng bài, XP, streak, localStorage | 8,966 bytes |

Tính năng đã build:
- Dashboard hiển thị 6 phase và tiến độ từng lesson.
- Sidebar điều hướng giữa các phase.
- Bộ đếm XP, Streak và số lesson đã hoàn thành.
- 3 dạng bài hoạt động đầy đủ: trắc nghiệm chọn đáp án, điền từ vào ô, xếp từ kéo/click.
- Feedback ngay sau khi kiểm tra: đúng/sai + giải thích + đáp án.
- Progress bar trong lesson.
- Hoàn tất lesson → màn hình chúc mừng.
- Lưu tiến độ vào `localStorage` (persist sau khi đóng tab).
- Màn hình "Nguồn YouTube" liệt kê 8 nguồn đã kiểm tra.

### 4.4. File hỗ trợ

```
C:\Users\vandu\Documents\Become Cloud Engineering\cloud-duolingo-app\README.md
C:\Users\vandu\Documents\Become Cloud Engineering\cloud-duolingo-app\start_app.bat
```

---

## GIAI ĐOẠN 5 — Nghiệm thu

### 5.1. Kiểm tra server và file

- Server Python HTTP chạy tại `http://127.0.0.1:8765/`.
- Tất cả 5 file trả HTTP 200 đúng content-type.
- Validate dữ liệu Python: 6 phase, 24 lesson, 72 câu, đủ 3 dạng câu hỏi cho mỗi lesson.

### 5.2. Kiểm tra thực tế trên trình duyệt

- Mở app.
- Dashboard hiển thị đủ 6 phase và 24 lesson.
- Mở lesson "Terminal & Linux filesystem" (Phase 1).
- Câu trắc nghiệm: chọn `journalctl -u nginx` — đúng, +10 XP.
- Câu điền từ: nhập `chmod` — đúng, +10 XP.
- Câu xếp từ: sắp xếp đúng "kiểm tra log trước khi restart service" — đúng, +15 XP.
- Hoàn tất lesson — màn hình 🏆 hiện ra.
- Quay về lộ trình — tiến độ cập nhật: 35 XP, Streak 1, Done 1.
- `localStorage` lưu đúng.
- Màn hình "Nguồn YouTube" hoạt động.

---

## CÁC FILE HIỆN CÓ TRONG THƯ MỤC

```
C:\Users\vandu\Documents\Become Cloud Engineering\
├── cloud_engineer_6month_roadmap.md          (23,558 bytes) — Roadmap chi tiết 609 dòng
├── cloud_engineer_6month_roadmap.pdf         (93,348 bytes) — PDF 8 trang
├── build_cloud_roadmap_pdf.py                (22,490 bytes) — Script xuất PDF
├── cloud_engineer_market_research_addendum.md (11,618 bytes) — Nghiên cứu thị trường
├── youtube_research.md                       (5,033 bytes)  — Tổng hợp nguồn YouTube
├── youtube_research.json                     (12,092 bytes) — Audit transcript thực tế
└── cloud-duolingo-app/
    ├── index.html                            (1,963 bytes)  — HTML app
    ├── styles.css                            (6,457 bytes)  — Giao diện dark theme
    ├── app.js                                (8,966 bytes)  — Logic học tập
    ├── data.js                               (31,258 bytes) — Dữ liệu 6 phase/72 câu hỏi
    ├── README.md                             (891 bytes)    — Hướng dẫn chạy app
    └── start_app.bat                         (116 bytes)    — Script mở app nhanh
```

---

## CÁCH CHẠY APP

**Cách 1:** Chạy file `start_app.bat` trong `cloud-duolingo-app\`.

**Cách 2:** Mở terminal, chạy:

```bash
cd "/c/Users/vandu/Documents/Become Cloud Engineering/cloud-duolingo-app"
python -m http.server 8765
```

Sau đó mở: `http://127.0.0.1:8765/`

---

## QUY TẮC TIẾP THEO

- Mọi file/folder liên quan đến app học Cloud Engineering phải lưu vào `C:\Users\vandu\Documents\Become Cloud Engineering\` hoặc subfolder.
- Nếu cần tạo folder mới trong `C:\Users\vandu\Documents\` thì hỏi người dùng đặt tên trước, không tự đặt.

---

## GIAI ĐOẠN 6 — Nâng cấp CloudOps Duo v2 (04/08/2026)

### 6.1. Prompt đặc tả v2

File prompt đặc tả toàn bộ yêu cầu nâng cấp v2 đã được tạo:

```
C:\Users\vandu\Documents\Become Cloud Engineering\PROMPT_CLOUDOPS_DUO_V2.md
```

Trong đó:
- Phân tích 8 điểm nghẽn của v1.
- Đặc tả 6 dạng câu hỏi mới (terminal, scenario, match, diagram, calc, codefix).
- Đặc tả 6 loại lab mô phỏng (terminal, awsDiagram, terraformCli, kubectlCli, promqlConsole, examMode).
- Đặc tả spaced repetition Leitner và màn reviewScreen.
- Migration schema localStorage v1 → v2.
- 9 tiêu chí nghiệm thu và thứ tự triển khai đề xuất.

### 6.2. Dữ liệu nâng cấp (data-v2.js)

File mới tạo thêm, không thay thế data.js v1:

```
C:\Users\vandu\Documents\Become Cloud Engineering\cloud-duolingo-app\data-v2.js
```

Nội dung bổ sung:
- Mỗi 24 lesson được thêm 3 câu hỏi mới (dạng terminal/match/scenario hoặc calc/diagram/codefix tùy phase).
- Tổng câu hỏi: 72 (v1) + 72 (v2) = **144 câu hỏi**.
- Mỗi lesson được gắn `labSim` với đúng `kind` theo phase:
  - Phase 1 (terminal): 16 lệnh Linux/Git/Docker mô phỏng khác nhau.
  - Phase 2 (awsDiagram): VPC builder kéo/click — IGW, NAT, subnet, Security Group.
  - Phase 3 (terraformCli): Viết HCL → plan → apply mô phỏng.
  - Phase 4 (kubectlCli): Cluster giả lập CrashLoopBackOff/Pending/ImagePullBackOff.
  - Phase 5 (promqlConsole): Gõ PromQL trên mock metric, vẽ sparkline SVG.
  - Phase 6 (examMode): Thi thử SAA-C03 65 câu có đồng hồ ngược.
- Mỗi lesson được gắn `whyImportant` liên hệ JD thực tế (Endava, Dirox, OpenCommerce, VTI, Extreme).
- `interviewCards`: 50 câu flashcard phỏng vấn dạng Leitner.
- `saaExamPool`: Pool 65 câu thi thử SAA-C03.

### 6.3. Nâng cấp app.js (v2)

Logic mới thêm vào `app.js`:
- **Màn hình mới**: `labScreen`, `reviewScreen`, `examScreen` (bên cạnh `dashboard`, `lessonScreen`, `sourcesScreen`).
- **Migration `migrateFromV1()`**: Đọc key cũ `cloudops-duo-progress-v1`, giữ lại XP/streak/completed, seed thêm field mới (`reviewQueue`, `opensCount`, `realLabDone`, `examHistory`, `labProgress`, `applicationTracker`).
- **Lab simulator (`labScreen`)**: Component dùng chung dispatch theo `labSim.kind`.
- **Ôn tập Leitner (`reviewScreen`)**: Queue câu sai theo box 1→3, button ôn tập trên sidebar.
- **Thi thử exam (`examScreen`)**: 65 câu ngẫu nhiên từ pool, đồng hồ real-time, lưu `examHistory`, báo kết quả theo %.
- **Application tracker**: Mini tool trong Phase 6 lab lưu danh sách job đã ứng tuyển.
- **Bonus XP thực hành thật**: Checkbox "Tôi đã tự làm lại" ở cuối mỗi lab, tick thì +20 XP và lưu `realLabDone`.
- **`normalize()` chấm lệnh terminal**: chấp nhận biến thể flag, trim whitespace.

### 6.4. Nâng cấp styles.css (v2)

Thêm style cho các component mới:
- `.terminal-ui`, `.terminal-input`, `.terminal-output`, `.task-list`.
- `.match-grid`, `.match-item`, `.match-item.paired`.
- `.diagram-lab`, `.diagram-nodes`, `.drag-node`, `.diagram-slot`.
- `.code-block`, `.code-line`, `.code-editor`.
- `.lab-footer`, `.real-lab`.
- `.exam-intro`, `.exam-timer`, `.tracker`.
- `.sparkline`, `.source-grid`, `.source-item`.
- `.why-box`, `.scenario-score`, `.kbd`.
- `.complete-panel`, `.big`.
- Responsive breakpoints cập nhật cho tất cả màn mới.

### 6.5. Nghiệm thu thực tế trên browser

Kiểm tra thực tế đã pass:

| Tiêu chí | Kết quả |
|---|---|
| Mỗi lesson có ≥6 câu hỏi | Pass (min = 6, tổng = 144) |
| Mỗi lesson có 1 labSim hoạt động | Pass (24/24 lab) |
| Phase 1 terminal có ≥10 lệnh | Pass (16 lệnh: systemctl, journalctl, ps, ss, nslookup, curl, ip route, git, docker…) |
| AWS diagram validate ≥3 rule | Pass |
| Terraform CLI in đúng plan output | Pass |
| kubectl simulator có ≥2 kịch bản lỗi | Pass (CrashLoopBackOff, Pending, ImagePullBackOff) |
| Màn Ôn tập hiển thị đúng | Pass |
| Phase 6 có thi thử 65 câu + timer | Pass (timer 90 phút, lưu examHistory) |
| `migrateFromV1()` giữ XP/streak/completed | Pass (test với v1 giả lập xp=123, streak=4) |
| Chạy offline qua `python -m http.server` | Pass (tất cả file HTTP 200) |
| Không lỗi console | Pass (0 JS error) |

### 6.6. Cấu trúc file sau nâng cấp v2

```
C:\Users\vandu\Documents\Become Cloud Engineering\cloud-duolingo-app\
├── index.html           — HTML v2: thêm labScreen, reviewScreen, examScreen; load data-v2.js
├── styles.css           — CSS v2: thêm style simulator, exam, tracker, responsive update
├── data.js              — Dữ liệu gốc v1 (72 câu, giữ nguyên)
├── data-v2.js           — Enrichment v2: 72 câu mới + labSim + interview + examPool
├── app.js               — Logic v2: lab, review, exam, migration, tracker
├── README.md            — Hướng dẫn v2 cập nhật
└── start_app.bat        — Chạy local server không đổi
```

---

## CÁC FILE HIỆN CÓ TRONG THƯ MỤC (CẬP NHẬT)

```
C:\Users\vandu\Documents\Become Cloud Engineering\
├── cloud_engineer_6month_roadmap.md
├── cloud_engineer_6month_roadmap.pdf
├── build_cloud_roadmap_pdf.py
├── cloud_engineer_market_research_addendum.md
├── youtube_research.md
├── youtube_research.json
├── NHAT_KY_CONG_VIEC.md                   ← file này
└── cloud-duolingo-app/
    ├── index.html                (v2)
    ├── styles.css                (v2)
    ├── data.js                   (v1, giữ nguyên)
    ├── data-v2.js                (v2 mới)
    ├── app.js                    (v2)
    ├── README.md                 (v2)
    └── start_app.bat
```

---

## CÁCH CHẠY APP (v2)

**Cách 1:** Chạy file `start_app.bat` trong `cloud-duolingo-app\`.

**Cách 2:** Mở terminal, chạy:

```bash
cd "/c/Users/vandu/Documents/Become Cloud Engineering/cloud-duolingo-app"
python -m http.server 8765 --bind 127.0.0.1
```

Sau đó mở: `http://127.0.0.1:8765/`

