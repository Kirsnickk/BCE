# Bổ sung research thị trường — Cloud / DevOps Engineer Việt Nam

_Cập nhật từ dữ liệu JD và báo cáo thị trường đã thu thập ngày 04/08/2026. Mục tiêu: hiệu chỉnh roadmap 6 tháng theo nhu cầu tuyển dụng thực tế, không theo danh sách công cụ rời rạc._

## 1. Kết luận điều chỉnh roadmap

Roadmap hiện tại đúng hướng, nhưng cần định vị mục tiêu ứng tuyển là **Junior DevOps / Infrastructure & DevOps / Cloud Operations Engineer** trước, thay vì chỉ tìm đúng title “Cloud Engineer”. Trong các JD đã kiểm tra, cửa vào junior rõ nhất nằm ở vận hành Linux, container, CI/CD, scripting và xử lý sự cố; title Cloud Engineer độc lập thường yêu cầu 1–3 năm kinh nghiệm cloud/production.

Lộ trình ưu tiên cuối cùng:

1. Linux + Network + troubleshooting + Git
2. Bash/Python + Docker + ứng dụng web căn bản
3. AWS core (IAM, VPC, EC2, S3, CloudWatch, RDS cơ bản) + security/cost
4. Terraform + Ansible + CI/CD
5. Kubernetes + Helm + observability
6. GitHub portfolio + runbook + phỏng vấn + AWS SAA-C03

## 2. Bằng chứng từ JD thực tế

### Junior DevOps Engineer — Endava, TP.HCM (LinkedIn, đăng 5 ngày trước)

JD chấp nhận fresh graduate đến 2 năm kinh nghiệm. Yêu cầu nổi bật:
- Linux: files, permissions, processes, services, networking basics, command-line troubleshooting.
- Bash/Python, Git.
- Docker, Kubernetes, Helm và cloud-native fundamentals.
- CI/CD: Jenkins, GitLab CI hoặc GitHub Actions.
- TCP/IP, DNS, ports, connectivity checks.
- Thu thập log, triage ticket, tái tạo sự cố và viết tài liệu; tiếng Anh tốt.
- Điểm cộng: Ansible, GitOps, Prometheus, Grafana, OpenSearch/ELK, Zabbix và personal projects.

Nguồn: https://vn.linkedin.com/jobs/view/junior-devops-engineer-at-endava-4446497937

### Infrastructure & DevOps Engineer — Dirox, TP.HCM (ITviec, đăng 3 giờ trước)

JD yêu cầu 1–3 năm Infrastructure/DevOps/System Admin nhưng cho thấy đúng “hình dạng” công việc entry-to-junior nên nhắm đến:
- Linux, Windows Server, networking, Git, Docker, CI/CD, Bash/PowerShell/Python.
- Vận hành cloud/on-prem, triển khai container, monitoring, backup/DR, tự động hóa và tài liệu vận hành.
- Các điểm cộng: Kubernetes, AWS/Azure/GCP, Terraform/Ansible, virtualization, monitoring, firewall.
- Công việc IT Ops hiện có như M365/Google Workspace, asset inventory, LAN/WAN/Wi‑Fi/VPN/Firewall là kinh nghiệm chuyển đổi có giá trị, không phải phần ngoài lề.

Nguồn: https://itviec.com/it-jobs/infrastructure-devops-engineer-dirox-3015

### DevOps Engineer — OpenCommerce Group, Hà Nội (TopDev)

JD từ 1 năm kinh nghiệm yêu cầu:
- AWS/GCP cơ bản; Terraform/CloudFormation; Ansible.
- Jenkins/GitLab CI; Docker, Kubernetes, Helm, Kustomize.
- Bash/Python; Prometheus/Grafana/ELK.
- High availability, security, backup/DR, monitoring/logging/alerting và automation.

Nguồn: https://topdev.vn/detail-jobs/devops-engineer-opencommerce-group-2118013

### Junior DevOps / DevSecOps — VTI, Hà Nội (LinkedIn)

JD minh họa chuẩn “junior nhưng không chỉ biết tool”:
- Linux, Docker, Kubernetes, Git, Jenkins/GitHub Actions, Terraform.
- AWS/Azure/GCP, Prometheus/Grafana; CI/CD và IaC.
- Security được đưa vào SDLC (SAST/DAST/SCA), OWASP và cloud security.

Nguồn: https://vn.linkedin.com/jobs/view/junior-devops-at-vti-4447202099

### Cloud Engineer — Extreme Việt Nam (ITviec)

JD Cloud Engineer thực thụ yêu cầu 2–3 năm trực tiếp cloud/migration. Must-have: AWS, Azure căn bản, IaC (Terraform/CloudFormation/Bicep), Linux CLI/Shell. CI/CD và Docker/Kubernetes là điểm cộng. Có AWS SysOps, Solutions Architect hoặc Azure certificate là lợi thế lớn.

Nguồn: https://itviec.com/it-jobs/urgent-02-junior-cloud-engineer-aws-azure-extreme-viet-nam-2024

### Cloud Operator — CAEX (ITviec)

JD CloudOps nêu rõ năng lực vận hành production: AWS/Azure/GCP; VPC, subnet, firewall, VPN, load balancer; Linux/Windows; Terraform/Ansible/CloudFormation; Docker/Kubernetes; Python/Bash; IAM, network security, backup/DR, FinOps và runbook.

Nguồn: https://itviec.com/it-jobs/cloud-engineer-aws-terraform-devops-ansible-linux-ctcp-san-giao-dich-tai-san-ma-hoa-viet-nam-thinh-vuong-caex-1436

## 3. Ma trận kỹ năng: học đến mức nào

| Nhóm | Bắt buộc sau 6 tháng | Minh chứng portfolio |
|---|---|---|
| Linux | Users/groups/permissions, systemd, process, logs, SSH, disk, network troubleshooting | Runbook xử lý service down, disk full, port/DNS lỗi |
| Networking | TCP/IP, DNS, HTTP(S), ports, CIDR/subnet, routing, NAT, LB, VPN khái niệm | VPC nhiều subnet public/private, security group/NACL diagram |
| Scripting | Bash trước, Python automation cơ bản; parsing log/API/file | Script health-check + backup/log report có unit/basic tests |
| Git & CI/CD | Branch/PR/tag; GitHub Actions build/test/scan/deploy | Pipeline chạy khi PR/push, có artifact và rollback note |
| Docker | Dockerfile multi-stage, Compose, volume/network, image scan | App containerized có README và non-root image |
| AWS | IAM least privilege, VPC, EC2, S3, CloudWatch, RDS baseline, Route 53/ALB concepts | Hạ tầng AWS có tagging, budgets, logs, diagram và teardown |
| IaC | Terraform modules/state/variables/outputs; Ansible playbook cơ bản | `terraform plan`/`apply` reproducible; remote state được mô phỏng hoặc mô tả rõ |
| Kubernetes | Deployment, Service, Ingress, ConfigMap/Secret, probes, resources, HPA khái niệm, Helm | Deployment bằng Helm; rolling update và rollback được chứng minh |
| Observability & ops | Metrics/logs/alerts; incident triage; backup/DR; cost awareness | Grafana dashboard, 2 alert rule, postmortem giả lập, restore drill |
| Security | IAM, secret hygiene, least privilege, TLS, basic image/dependency scan, OWASP awareness | Không commit secret; secret scanning/SAST cơ bản trong pipeline |
| Documentation & English | README, architecture diagram, runbook, postmortem, technical English | Mỗi project có docs tiếng Anh rõ ràng, có phần quyết định và trade-off |

## 4. Thay đổi nên áp dụng ngay vào 3 portfolio

### Project 1 — Production-ready containerized web service

- Dockerfile multi-stage/non-root, Docker Compose, Nginx reverse proxy và TLS local/staging.
- GitHub Actions: lint/test/build/image scan/push image.
- Runbook: service không lên, lỗi port, lỗi DNS, xem log, rollback.

**Mục tiêu JD đáp ứng:** Linux, Docker, Git, CI/CD, Bash/Python, troubleshooting, documentation.

### Project 2 — AWS platform bằng Terraform

- VPC 2 AZ (có thể mô phỏng một phần nếu cần tiết kiệm), public/private subnet, EC2 hoặc ECS, S3, IAM role, CloudWatch logs/alarms.
- Tagging, AWS Budget alert, nguyên tắc least privilege; diagram và teardown instructions.
- Bonus: Ansible bootstrap EC2; RDS conceptual or small free-tier lab.

**Mục tiêu JD đáp ứng:** AWS, VPC/network, IaC, security, monitoring, cost/FinOps.

### Project 3 — Kubernetes delivery & observability

- K3d/Kind hoặc EKS tùy ngân sách: Helm deploy app, readiness/liveness, resource request/limit, HPA lý thuyết/lab, rolling update/rollback.
- Prometheus + Grafana hoặc cloud-native logs; 2 alert rules.
- Incident simulation: tăng latency hoặc kill pod; postmortem có timeline, root cause, fix và prevention.

**Mục tiêu JD đáp ứng:** Kubernetes, Helm, observability, reliability, incident handling, runbook.

## 5. Chứng chỉ: thứ tự hợp lý

1. **AWS Certified Solutions Architect – Associate (SAA-C03)**: mục tiêu chính cuối tháng 6; bám sát AWS core, IAM/VPC, resilience, security và cost optimization. JD Extreme Việt Nam nêu AWS Solutions Architect/SysOps là lợi thế.
2. Nếu nền tảng cloud còn quá mới: **AWS Certified Cloud Practitioner** chỉ dùng làm mốc khởi động, không thay thế SAA-C03; không nên kéo dài quá 2–3 tuần.
3. Sau khi có việc hoặc mạnh Kubernetes: CKA/CKAD là bước tiếp theo, không cần đặt mục tiêu bắt buộc trong 6 tháng.
4. Azure AZ-104 chỉ học bổ sung nếu JD mục tiêu thiên Azure; thị trường JD đã thấy AWS là trục chính nhưng Azure/GCP xuất hiện thường xuyên như năng lực bổ trợ.

## 6. Chiến lược ứng tuyển tháng 5–6

### Title nên tìm

- Junior DevOps Engineer
- DevOps Engineer (1 year / junior)
- Infrastructure & DevOps Engineer
- Cloud Operations / Cloud Operator / Cloud Support Engineer
- System Engineer / Infrastructure Engineer
- IT Operations Engineer có AWS/Docker/automation

### Từ khóa CV/LinkedIn cần xuất hiện (chỉ ghi khi có lab thật)

Linux, troubleshooting, Bash, Python, Git, Docker, Kubernetes, Helm, AWS, IAM, VPC, EC2, S3, CloudWatch, Terraform, Ansible, GitHub Actions/Jenkins, Prometheus, Grafana, CI/CD, IaC, monitoring, logging, backup, disaster recovery, runbook, networking, DNS, TCP/IP, VPN, firewall.

### Hàng tuần trong 8 tuần cuối

- 5–10 ứng tuyển có chọn lọc/tuần, chỉnh CV theo JD.
- 1 mock interview Linux/network/Cloud tuần.
- 1 cải tiến portfolio hoặc thêm incident/write-up tuần.
- 2 bài LinkedIn/GitHub ngắn/tháng: lab lesson, troubleshooting case hoặc architecture decision.

## 7. Lưu ý về lương

Không nên khẳng định một “mức lương Cloud Engineer junior” duy nhất từ báo cáo tổng hợp, vì ITviec 2025–2026 không tách riêng title này trong bảng công khai. Báo cáo ITviec có 1.839 người trả lời, khảo sát từ tháng 5–7 và 10–11/2025, cho biết tín hiệu nhu cầu tuyển IT đang phục hồi và lương có độ trễ/stagnation. Vì vậy, mục tiêu **15–25 triệu VND/tháng** là hợp lý để đặt kỳ vọng cho lần chuyển nghề nếu có nền tảng IT Operations + portfolio mạnh, nhưng offer thực tế phụ thuộc thành phố, tiếng Anh, trực on-call, mức production exposure và độ khớp JD.

Nguồn: https://itviec.com/blog/it-salary-report

## 8. Nguồn tham khảo phương pháp

- ITviec, Vietnam IT Salary & Recruitment Market Report 2025–2026: https://itviec.com/blog/it-salary-report
- ITviec JD: Dirox, Extreme Việt Nam, CAEX — liên kết ở từng mục.
- LinkedIn JD: Endava, VTI — liên kết ở từng mục.
- TopDev Cloud Engineer overview (2024): https://topdev.vn/blog/cloud-engineer-la-gi/
- TopDev DevOps roadmap (2022; chỉ dùng làm khung, ưu tiên JD mới hơn): https://topdev.vn/blog/8-buoc-trong-lo-trinh-tro-thanh-devops-engineer/
- TopDev OpenCommerce JD: https://topdev.vn/detail-jobs/devops-engineer-opencommerce-group-2118013

## 9. Quy tắc kiểm chứng trước khi kết thúc từng tháng

Không đánh dấu “đã học” khi chỉ xem video. Chỉ đạt khi có đủ: (1) repo/commit; (2) README tiếng Anh; (3) diagram; (4) lệnh tái tạo; (5) ít nhất một lỗi đã tự debug và ghi lại; (6) teardown/cost note khi dùng cloud.

Điều này biến kinh nghiệm IT Operations hiện hữu thành một câu chuyện tuyển dụng đáng tin: **vận hành → tự động hóa → cloud-native delivery**, thay vì “học nhiều tool nhưng chưa vận hành được hệ thống”.