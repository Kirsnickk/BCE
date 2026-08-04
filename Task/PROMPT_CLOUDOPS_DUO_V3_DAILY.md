# PROMPT — Nâng cấp CloudOps Duo (BCE) sang lộ trình học THEO NGÀY (3 giờ/ngày)

> Dán prompt này cho AI coding assistant (Claude Code, v.v.) đang làm việc trực tiếp trên repo `github.com/Kirsnickk/BCE`.

## 1. Vai trò & bối cảnh

Bạn là AI kỹ sư phần mềm, làm việc trên app `cloud-duolingo-app/` (CloudOps Duo v2) trong repo BCE — app học Cloud/DevOps kiểu Duolingo, client-side thuần (HTML/CSS/vanilla JS), không backend, không build step, chạy qua `python -m http.server`.

**Hiện trạng app v2 (đã hoạt động, KHÔNG được phá vỡ):**

- 6 phase bám theo `cloud_engineer_6month_roadmap.md` (26 tuần, mục tiêu Junior Cloud/DevOps Engineer tại HCM).
- 24 lesson (4/phase), 144 câu hỏi, 9 dạng: `mcq`, `fill`, `order`, `terminal`, `scenario`, `match`, `diagram`, `calc`, `codefix` — trong `data.js` + `data-v2.js`.
- 24 lab mô phỏng theo `labSim.kind`: `terminal`, `awsDiagram`, `terraformCli`, `kubectlCli`, `promqlConsole`, `examMode` — logic trong `app.js`.
- Ôn tập Leitner (`reviewQueue`), thi thử SAA-C03 65 câu có đồng hồ (`examScreen`).
- Tiến độ lưu `localStorage`, có `migrateFromV1()` giữ XP/streak khi nâng cấp schema.
- Nguồn tham khảo: 8 kênh YouTube uy tín, transcript đã verify qua `youtube-transcript-api` (`youtube_research.json/md`); rule sẵn có: không copy transcript, chỉ tự biên soạn lại.

**Vấn đề cần giải quyết:** App hiện tổ chức theo Lesson/Phase (duyệt tự do), CHƯA có khái niệm "1 ngày học = 1 phiên 3 giờ". File `cloud_engineer_6month_roadmap.md` đã có breakdown Mon–Sun theo từng tuần nhưng chưa được đưa vào app. Phần "lý thuyết" hiện tại chỉ là `explanation` xuất hiện SAU khi trả lời câu hỏi — chưa có khối lý thuyết để đọc TRƯỚC khi làm quiz/lab.

## 2. Mục tiêu

Biến app thành lộ trình học THEO NGÀY, mỗi ngày ~3 giờ, đúng chu trình:

**Lý thuyết → Lab thực hành → Review**

...mà KHÔNG viết lại từ đầu — chỉ bổ sung một lớp "Ngày học" bọc quanh dữ liệu lesson/question/labSim đã có, đúng tinh thần cách `data-v2.js` từng bổ sung mà không sửa `data.js`.

## 3. Yêu cầu chi tiết

### 3.1. Data — thêm entity "Ngày học" (`data-v3.js`, không sửa `data.js`/`data-v2.js`)

```js
{
  id: "d001", week: 1, dayOfWeek: "Mon", phaseId: "p1",
  title: "Linux Navigation & Basic Commands",
  budgetMinutes: { theory: 50, lab: 100, review: 30 }, // tổng ~180 phút, được phép lệch ±15
  theory: {
    summary: "... (tự viết lại, KHÔNG copy transcript/tài liệu gốc)",
    keyPoints: ["...", "..."],
    sources: [
      { title: "...", org: "...", url: "...", type: "doc|video|roadmap", verified: true }
    ]
  },
  lab: {
    lessonRef: "p1l1",        // trỏ vào lesson/labSim đã có, KHÔNG duplicate data
    realWorldContext: "..."   // vì sao case này thực tế
  },
  reviewQuestionIds: ["p1l1q1", "p1l1q2", "p1l1q3"] // tái dùng question bank hiện có
}
```

Map đủ 26 tuần theo đúng nội dung đã có sẵn trong `cloud_engineer_6month_roadmap.md` (không bịa lộ trình mới, chỉ chuyển thể sang data). Ngày Chủ Nhật giữ đúng vai trò "review tuần" như bảng gốc đã thiết kế (theory ít/không có, review nặng hơn).

### 3.2. RULE bắt buộc — Lý thuyết phải xác thực nhiều nguồn

- Mỗi `theory.sources` tối thiểu **2 nguồn độc lập, đáng tin cậy**: ưu tiên tài liệu chính thức (AWS Docs, Kubernetes Docs, Terraform Docs, man pages/kernel.org, CNCF, Prometheus Docs) + 1 video/course từ kênh uy tín đã dùng trong project.
- Nguồn chưa xác thực được (transcript bị tắt, không phải kênh chính thức) phải gắn `verified: false` và KHÔNG được dùng làm căn cứ duy nhất cho một câu hỏi — giữ đúng cách app đã xử lý video SAA-C03 của freeCodeCamp.
- `theory.summary` là tổng hợp/diễn giải lại bằng lời riêng, không copy nguyên văn transcript hay tài liệu có bản quyền (rule đã ghi sẵn trong `youtube_research.md`).
- Nếu 2 nguồn mâu thuẫn, phải ghi chú rõ trong `summary` (ví dụ: "AWS docs khuyến nghị X, nhưng thực tế vận hành thường dùng Y vì...").

### 3.3. Lab ưu tiên case thực tế

- Mỗi `lab.realWorldContext` nên bám vào: JD thật tại VN (tái dùng field `whyImportant` đã có trong `data-v2.js`), hoặc case/postmortem công khai nổi tiếng (S3 bucket public leak, CrashLoopBackOff thường gặp, sự cố AWS us-east-1...).
- Gợi ý cá nhân hoá: có thể biến một vài case vận hành hạ tầng thật (đã tự xử lý, ẩn thông tin công ty/khách hàng) thành lab ở phase Linux/Networking/Monitoring — case tự xử lý luôn thực tế hơn case tưởng tượng.
- Không bắt buộc tài khoản cloud thật; `labSim` mô phỏng vẫn giữ nguyên, chỉ thêm ngữ cảnh để lab "có lý do" chứ không phải bài tập rời rạc.

### 3.4. Review cuối ngày (tách biệt với Leitner hiện có, không thay thế)

- Cuối mỗi ngày: 5–8 câu quiz nhanh lấy từ `reviewQuestionIds` để recap đúng nội dung HÔM NAY.
- Câu trả lời sai → tự động đẩy vào `reviewQueue` Leitner hiện có (không đổi cơ chế Leitner, chỉ thêm nguồn nạp).
- Kết thúc review: màn hình tóm tắt "Hôm nay đã học" (key points + lệnh/khái niệm chính) trước khi đánh dấu ngày hoàn thành.

### 3.5. UI/UX

- Thêm màn `dayScreen` làm entry point mặc định (thay vì mở thẳng dashboard phase): hiển thị "Ngày X/182 — Tuần Y", 3 bước tuần tự Theory → Lab → Review với thanh tiến trình thời gian ước lượng (không cần đồng hồ đếm ngược bắt buộc).
- Giữ nguyên dashboard Phase/Lesson làm màn "Xem toàn bộ lộ trình" (khám phá tự do), không xoá.
- Có nút chuyển nhanh giữa các ngày cho người học bù/học trước.

### 3.6. Migration & tương thích ngược

- Viết `migrateFromV2()` tương tự `migrateFromV1()`: giữ nguyên `xp`, `streak`, `completed`, `reviewQueue`, `examHistory`; thêm field mới `currentDay`, `daysCompleted`.
- Không sửa `data.js`, `data-v2.js`, không đổi `STORAGE_KEY` cũ theo cách làm mất dữ liệu người dùng hiện có.

## 4. Ràng buộc kỹ thuật (giữ nguyên, không đổi)

- 100% client-side, chạy bằng `python -m http.server`, không backend/build step.
- Không copy nội dung có bản quyền (transcript, sách, slide) — chỉ tự tổng hợp lại.
- UI tiếng Việt như hiện tại, giữ dark theme và style hệ thống trong `styles.css`.

## 5. Tiêu chí nghiệm thu

| # | Tiêu chí |
|---|---|
| 1 | Đủ ngày cho 26 tuần được map từ `cloud_engineer_6month_roadmap.md`, không thiếu tuần nào |
| 2 | Mỗi ngày có `budgetMinutes` tổng ≈ 180 phút (±15 phút) |
| 3 | 100% khối `theory` có ≥2 `sources`, ít nhất 1 nguồn `verified: true` |
| 4 | Không có `summary` nào trùng/gần giống transcript gốc (spot-check thủ công vài bài) |
| 5 | Mỗi `lab.realWorldContext` khác rỗng và gắn được với JD/case cụ thể |
| 6 | `migrateFromV2()` giữ đúng xp/streak/reviewQueue khi test với state giả lập |
| 7 | `dayScreen` chạy end-to-end: theory → lab → review → complete → mở khoá ngày kế tiếp |
| 8 | Không lỗi console, chạy offline qua `http.server` như README mô tả |

## 6. Thứ tự triển khai đề xuất

1. Data: viết `data-v3.js`, làm trước Tuần 1–4 (Phase 1) để demo, rồi mở rộng dần các tuần còn lại.
2. `migrateFromV2()` + logic render `dayScreen` trong `app.js`.
3. Style cho `dayScreen` trong `styles.css`.
4. Nối review cuối ngày vào `reviewQueue` Leitner hiện có.
5. Test thủ công theo bảng tiêu chí ở mục 5, cập nhật `NHAT_KY_CONG_VIEC.md` theo đúng format đã dùng cho các giai đoạn trước.

## 7. Không làm (out of scope)

- Không đổi sang React/framework khác, không thêm backend/database.
- Không xoá `data.js`/`data-v2.js`, không phá vỡ quiz/lab/exam hiện có.
- Không tạo lộ trình học mới khác với `cloud_engineer_6month_roadmap.md` — chỉ chuyển thể nội dung đã có sang app.
