# CloudOps Duo v3

App học Cloud/DevOps kiểu Duolingo cho roadmap 6 tháng, chạy hoàn toàn client-side bằng HTML/CSS/JavaScript thuần. Entry point mặc định là lộ trình theo ngày: Lý thuyết → Lab → Review.

## Cách chạy nhanh

Cách 1 — mở trực tiếp:

```text
C:\Users\vandu\Documents\Become Cloud Engineering\cloud-duolingo-app\index.html
```

Cách 2 — chạy local server:

```bash
cd "/c/Users/vandu/Documents/Become Cloud Engineering/cloud-duolingo-app"
python -m http.server 8765 --bind 127.0.0.1
```

Sau đó mở:

```text
http://127.0.0.1:8765/
```

## Nội dung v3

- 26 tuần / 182 ngày; mỗi ngày có ngân sách khoảng 180 phút.
- Mỗi ngày có theory summary, key points, ít nhất 2 nguồn, lab context và 5–8 câu review.
- 6 phase theo roadmap Cloud Engineer 6 tháng.
- 24 lesson, mỗi lesson có tối thiểu 6 câu hỏi.
- 144 câu hỏi tổng cộng.
- Dạng bài: `mcq`, `fill`, `order`, `terminal`, `scenario`, `match`, `diagram`, `calc`, `codefix`.
- 24 lab mô phỏng: terminal, AWS diagram, Terraform CLI, kubectl CLI, PromQL console, exam mode.
- Ôn tập Leitner cho câu sai qua `reviewQueue`.
- Thi thử SAA-C03 65 câu có đồng hồ và lưu `examHistory`.
- Application tracker cho Week 25.
- State chính v3 lưu tại `cloudops_duo_state_v3` với `migrationVersion: 3`.
- Migration từ `cloudops-duo-progress-v1` và `cloudops-duo-progress-v2` sang state v3 để giữ XP/streak/completed cũ.

## File chính

```text
index.html   - shell UI và các màn dashboard/lesson/lab/review/exam/source
styles.css   - dark theme responsive và style simulator
data.js      - dữ liệu gốc v1
data-v2.js   - enrichment v2: câu hỏi mới, labSim, interview cards, SAA exam pool
data-v3.js   - daily plan layer v3: 182 ngày, theory/lab/review cho mỗi ngày
app.js       - state, quiz engine, lab simulator, review, exam, daily flow, localStorage migration
```

## Nguồn nghiên cứu

Xem thêm:

```text
C:\Users\vandu\Documents\Become Cloud Engineering\youtube_research.md
C:\Users\vandu\Documents\Become Cloud Engineering\youtube_research.json
```

App chỉ dùng nguồn video để định hướng chủ đề; nội dung câu hỏi/log mô phỏng là tự biên soạn, không copy transcript.
