# CloudOps Duo — Học Cloud Engineer kiểu Duolingo

Repo lưu toàn bộ artifact cho dự án học 6 tháng chuyển từ IT Operations sang Junior Cloud/DevOps Engineer tại TP.HCM.

## Nội dung

- **Roadmap 6 tháng** (26 tuần, 6 phase): `cloud_engineer_6month_roadmap.md` / `.pdf`
- **Nghiên cứu thị trường**: `cloud_engineer_market_research_addendum.md`
- **Nghiên cứu nguồn YouTube**: `youtube_research.md` / `.json`
- **App học tập CloudOps Duo v2**: `cloud-duolingo-app/`
- **Nhật ký công việc**: `NHAT_KY_CONG_VIEC.md`

## CloudOps Duo v2

App local chạy hoàn toàn client-side (HTML/CSS/JavaScript thuần), không cần backend.

- 6 phase theo roadmap
- 24 lesson, 144 câu hỏi (9 dạng: mcq, fill, order, terminal, scenario, match, diagram, calc, codefix)
- 24 lab mô phỏng tương tác (terminal, AWS diagram, Terraform CLI, kubectl CLI, PromQL console, SAA-C03 exam)
- Ôn tập Leitner cho câu sai
- Thi thử SAA-C03 65 câu có đồng hồ
- Lưu tiến độ bằng localStorage (migration tự động từ v1 → v2)

## Cách chạy

```bash
cd cloud-duolingo-app
python -m http.server 8765 --bind 127.0.0.1
```

Mở trình duyệt: `http://127.0.0.1:8765/`

## Mục tiêu

Chuyển từ IT Ops sang Junior Cloud Engineer/DevOps tại TP.HCM, lương mục tiêu 15–25 triệu VND/tháng, chứng chỉ AWS SAA-C03.
