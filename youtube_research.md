# YouTube research cho Cloud Engineer Learning App

Ngày nghiên cứu: 04/08/2026

## Cách chọn nguồn

Ưu tiên kênh chính thức hoặc tổ chức có thẩm quyền: The Linux Foundation, GitHub, Docker, AWS Events, HashiCorp, CNCF, PromLabs và freeCodeCamp.org. Transcript được truy xuất thực tế bằng `youtube-transcript-api` cho 7/8 video; video AWS SAA-C03 của freeCodeCamp không bật transcript nên chỉ dùng làm video tham khảo, không dùng làm bằng chứng nội dung chi tiết.

## Nguồn đã kiểm tra

| Phase | Kênh | Video | Transcript | URL |
|---|---|---|---|---|
| 1 | The Linux Foundation | Beginners Intro to Command-line | Có | https://www.youtube.com/watch?v=N850L5Kv4Pg |
| 1 | GitHub | How to create a pull request in 4 min | Có | https://www.youtube.com/watch?v=nCKdihvneS0 |
| 1 | Docker | Docker 101: Introduction to Docker and Containers | Có | https://www.youtube.com/watch?v=kwsJIH5TGIg |
| 2 | AWS Events | Getting started with AWS identity | Có | https://www.youtube.com/watch?v=Zvz-qYYhvMk |
| 3 | HashiCorp, an IBM Company | Introduction to Terraform | Có | https://www.youtube.com/watch?v=ZFLWA1kQ3ls |
| 4 | CNCF | Kubernetes and Cloud Native Essentials Training | Có | https://www.youtube.com/watch?v=U05NwXkSWyU |
| 5 | PromLabs | Introduction to the Prometheus Monitoring System | Có | https://www.youtube.com/watch?v=STVMGrYIlfg |
| 6 | freeCodeCamp.org | AWS Solutions Architect Associate Certification Course | Không — subtitles disabled | https://www.youtube.com/watch?v=c3Cn4xYfxJY |

## Tổng hợp để thiết kế app

### Phase 1 — Foundations

Nội dung cần học theo thứ tự: command line/Linux → Git branch/commit/pull request → Docker/container. Mỗi bài phải có thao tác lệnh nhỏ, sau đó câu hỏi kiểm tra khái niệm và một bài debug ngắn.

### Phase 2 — AWS Core

Bắt đầu bằng identity/security, sau đó mới đi vào IAM, VPC, EC2, S3 và CloudWatch. Nguyên tắc least privilege nên xuất hiện trong câu hỏi tình huống, không chỉ câu hỏi định nghĩa.

### Phase 3 — Terraform/CI/CD

Trọng tâm là chuyển từ thao tác thủ công trên console sang Infrastructure as Code: configuration được lưu trong Git, có plan/apply, state và vòng đời thay đổi. Bài tập nên yêu cầu sắp xếp pipeline hoặc chọn bước đúng để kiểm tra thay đổi.

### Phase 4 — Kubernetes

Học cloud-native overview trước, sau đó container orchestration, Kubernetes architecture, workload, service và rollout. Câu hỏi nên nối khái niệm với lỗi vận hành: pod crash, readiness probe, service không route được.

### Phase 5 — Monitoring

Prometheus là monitoring dựa trên metrics, mô hình pull/scrape qua HTTP; dữ liệu có thể phục vụ alerting, dashboarding, debugging và automation. App cần phân biệt metric, log, alert và dashboard bằng câu hỏi tình huống.

### Phase 6 — SAA-C03/Job readiness

Video SAA-C03 được đưa vào danh sách tham khảo, nhưng nội dung chính của phase lấy từ roadmap, AWS documentation và bài kiểm tra kiến trúc: reliability, security, performance, cost và operational excellence. Kết thúc mỗi lesson bằng câu hỏi design trade-off và checklist portfolio/interview.

## Quy tắc dùng YouTube trong app

- App không sao chép toàn bộ transcript hoặc nội dung có bản quyền.
- Chỉ lưu tiêu đề, URL, ghi chú tóm tắt ngắn, chủ đề và câu hỏi do app tự biên soạn.
- Mỗi lesson có nút `Xem video nguồn` mở YouTube ở tab mới.
- Câu hỏi kiểm tra kiến thức được viết lại độc lập, không dùng transcript làm đáp án trực tiếp.
- Nguồn có transcript bị thiếu phải được đánh dấu rõ, không giả định transcript tồn tại.

## Nguồn dữ liệu máy

`youtube_research.json` chứa trạng thái truy xuất transcript, số snippet, số ký tự và đoạn trích kiểm tra cho từng video. File này phục vụ audit nguồn, không hiển thị toàn bộ transcript trong giao diện học.

## Nguồn tham khảo bổ sung

- TopDev DevOps roadmap: https://topdev.vn/blog/8-buoc-trong-lo-trinh-tro-thanh-devops-engineer/
- AWS Training: https://aws.amazon.com/training/
- HashiCorp Terraform tutorials: https://developer.hashicorp.com/terraform/tutorials
- Kubernetes documentation: https://kubernetes.io/docs/home/
- Prometheus documentation: https://prometheus.io/docs/introduction/overview/
- GitHub Skills: https://skills.github.com/

## Lưu ý chất lượng

YouTube là nguồn bổ trợ để minh họa và tạo động lực; tài liệu chính thức và lab thực tế là nguồn chuẩn để xác định đáp án. App sẽ không chấm người học dựa trên việc đã xem video, mà dựa trên việc trả lời đúng, giải thích được và hoàn thành lab/checkpoint.
