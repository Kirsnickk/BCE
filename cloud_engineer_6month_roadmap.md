# LỘ TRÌNH 6 THÁNG TRỞ THÀNH CLOUD ENGINEER
## Dựa trên phân tích roadmap.sh + thị trường việc làm Vietnam 2025-2026

---

## TỔNG QUAN

| Thông tin | Chi tiết |
|---|---|
| Thời gian | 6 tháng (26 tuần) |
| Phương pháp | Hybrid: Job-task-first + Project-first + Lab |
| Mục tiêu | Junior Cloud/DevOps Engineer tại HCM (15-25M VND) |
| Chứng chỉ mục tiêu | AWS Solutions Architect Associate (SAA-C03) |
| Portfolio | 3 GitHub repos + runbooks + diagrams |

---

## YÊU CẦU THỊ TRƯỜNG HIỆN NAY (Vietnam 2025-2026)

Dựa trên phân tích ITviec, TopDev, LinkedIn:

**Top 10 kỹ năng nhà tuyển dụng yêu cầu:**
1. Linux (Ubuntu/CentOS) — bắt buộc 90% JD
2. Docker & Container — bắt buộc 85% JD
3. AWS (EC2, VPC, IAM, S3) — bắt buộc 80% JD
4. CI/CD (GitHub Actions / Jenkins) — bắt buộc 75% JD
5. Kubernetes (EKS/k8s) — yêu cầu 65% JD
6. Terraform / Infrastructure as Code — yêu cầu 60% JD
7. Python scripting — yêu cầu 55% JD
8. Git / GitHub — bắt buộc 95% JD
9. Monitoring (Prometheus + Grafana) — yêu cầu 50% JD
10. Networking cơ bản (TCP/IP, DNS, VPC, CIDR) — yêu cầu 70% JD

**Lương tham khảo HCM:**
- Junior Cloud/DevOps (0-1 năm): 15-22M VND
- Mid-level (1-3 năm): 25-40M VND
- Senior (3+ năm): 40-70M VND

---

## PHÂN TÍCH 7 ROADMAP PDF

### Thứ tự học tối ưu từ tất cả roadmaps:

```
Linux Fundamentals
    ↓
Networking & Protocols (TCP/IP, DNS, SSH, HTTP/S)
    ↓
Git & Version Control
    ↓
Bash Scripting + Python cơ bản
    ↓
Docker (Containers)
    ↓
AWS Core (IAM → VPC → EC2 → S3 → CloudWatch)
    ↓
CI/CD (GitHub Actions)
    ↓
Terraform (Infrastructure as Code)
    ↓
Kubernetes (K8s / EKS)
    ↓
Monitoring & Observability (Prometheus, Grafana, Loki)
    ↓
Security & Advanced (RBAC, Secrets, Hardening)
    ↓
AWS Certification (SAA-C03)
```

---

## LỘ TRÌNH CHI TIẾT 6 THÁNG

---

### THÁNG 1: NỀN TẢNG HỆ THỐNG (Weeks 1-4)

**Mục tiêu:** Vững Linux, Networking, Git — nền tảng của mọi thứ Cloud

---

#### WEEK 1 — LINUX FUNDAMENTALS
*Nguồn: linux.pdf từ roadmap.sh*

| Ngày | Chủ đề | Lab thực hành |
|---|---|---|
| Mon | Navigation, Basic Commands, Directory Hierarchy | Thực hành 50 lệnh cơ bản trong WSL Ubuntu |
| Tue | File Permissions, Users/Groups, Super User (sudo) | Tạo user, set permission, chown/chmod |
| Wed | Text Processing: grep, awk, sed, cut, sort, uniq | Phân tích log file với grep + awk |
| Thu | Process Management: ps, top, kill, signals, priorities | Monitor server load, kill zombie processes |
| Fri | Service Management (systemd): start/stop/enable/status | Tạo systemd service cho app Python |
| Sat | Package Management: apt, snap, install/remove/upgrade | Cài Nginx, cấu hình, check trạng thái |
| Sun | Review + commit labs lên GitHub | Push linux-admin-labs repo |

**Lab output:** `linux-admin-labs/week1/` với runbook.md + screenshots

---

#### WEEK 2 — LINUX ADVANCED + NETWORKING
*Nguồn: linux.pdf + network-engineer.pdf*

| Ngày | Chủ đề | Lab |
|---|---|---|
| Mon | Disks & Filesystems: mount, LVM, df, du | Kiểm tra disk, clean up an toàn |
| Tue | Shell Programming: variables, loops, conditionals, debug | Script tự động backup files |
| Wed | Networking: TCP/IP, SSH, file transfer (scp/rsync) | SSH key-based auth, SCP file |
| Thu | DNS, HTTP/HTTPS, SSL/TLS cơ bản | Tra DNS với dig/nslookup, curl HTTPS |
| Fri | Networking troubleshoot: ping, traceroute, netstat, nmap | Debug "website không vào được" |
| Sat | OSI Model, IP Addressing, Subnetting, CIDR | Tính subnet, đọc routing table |
| Sun | Review + viết incident report format | Template incident report |

**Lab output:** `linux-admin-labs/week2/` — script + runbook networking

---

#### WEEK 3 — GIT + BASH SCRIPTING + PYTHON CƠ BẢN

| Ngày | Chủ đề | Lab |
|---|---|---|
| Mon | Git: init, clone, add, commit, push, pull | Tạo repo cloud-job-task-labs |
| Tue | Git: branches, merge, rebase, conflict resolution | Tạo feature branch, merge, resolve conflict |
| Wed | Git: GitHub Actions cơ bản (intro) | Đọc workflow YAML, hiểu triggers |
| Thu | Bash: functions, error handling, exit codes, crontab | Script health-check với cron mỗi 5 phút |
| Fri | Python cơ bản: file I/O, requests, json, subprocess | Script Python gọi API + xử lý JSON |
| Sat | Python: boto3 preview (AWS SDK) — đọc docs | Cài boto3, list S3 buckets (mock) |
| Sun | Review + tổng kết Tháng 1 checkpoint | README.md cho repo |

---

#### WEEK 4 — DOCKER FUNDAMENTALS
*Nguồn: docker.pdf từ roadmap.sh*

| Ngày | Chủ đề | Lab |
|---|---|---|
| Mon | Container concept: VMs vs Containers, namespaces, cgroups | Đọc docker docs, chạy hello-world |
| Tue | Docker CLI: images, containers, volumes, networks | Pull nginx, run, exec, stop, rm |
| Wed | Dockerfile: FROM, RUN, COPY, EXPOSE, CMD, ENTRYPOINT | Build image Python app |
| Thu | Efficient Dockerfiles: layer caching, multi-stage build, .dockerignore | Tối ưu image size |
| Fri | Docker Compose: multi-container (app + db + redis) | Docker compose: FastAPI + PostgreSQL |
| Sat | Container Security: non-root user, image scanning, secrets | Scan image với trivy |
| Sun | Docker Registry: push image lên DockerHub + GitHub Packages | Build → tag → push |

**Lab output:** `cloud-job-task-labs/task-04-docker-deploy/` đầy đủ

---

### THÁNG 2: AWS CORE SERVICES (Weeks 5-8)

**Mục tiêu:** Thành thạo AWS essential services — IAM, VPC, EC2, S3, CloudWatch

---

#### WEEK 5 — AWS SETUP + IAM + VPC
*Nguồn: aws.pdf — Step 1 Essentials*

| Ngày | Chủ đề | Lab |
|---|---|---|
| Mon | AWS Account setup: MFA root, IAM admin user, billing alarm | Setup account an toàn, tạo billing alarm $5 |
| Tue | IAM: Users, Groups, Policies, Roles | Tạo IAM user, attach policy, test access |
| Wed | IAM: Roles, Instance Profiles, Assuming Roles | Tạo role cho EC2, attach policy |
| Thu | VPC: CIDR, Subnets (public/private), Route Tables | Tạo custom VPC 10.0.0.0/16 |
| Fri | VPC: Internet Gateway, NAT Gateway, Security Groups | Attach IGW, tạo Security Group cho web |
| Sat | AWS CLI: configure, ec2/s3/iam commands | aws configure, list resources với CLI |
| Sun | Review + diagram VPC architecture | Vẽ sơ đồ VPC với draw.io |

**Cost control:** Xóa NAT Gateway khi không dùng ($0.045/giờ)

---

#### WEEK 6 — EC2 + S3 + DEPLOYMENT
*Nguồn: aws.pdf — EC2, S3, Auto-Scaling*

| Ngày | Chủ đề | Lab |
|---|---|---|
| Mon | EC2: Instance Types, Launch, keypairs, User Data Scripts | Launch EC2 t2.micro, SSH vào |
| Tue | EC2: Elastic IP, Security Groups, Purchasing Options | Gán Elastic IP, mở port 80/443 |
| Wed | EC2: Deploy app thực tế (Nginx + FastAPI/Node.js) | Deploy web app lên EC2 |
| Thu | EC2: AMIs, Launch Templates, Auto-Scaling Groups | Tạo AMI, Launch Template |
| Fri | S3: Buckets, Objects, Lifecycle, Storage Classes | Upload/download, versioning, lifecycle rule |
| Sat | S3 Backup automation: script backup EC2 logs → S3 | Python boto3 backup script |
| Sun | Review + viết runbook EC2 deploy | Runbook: deploy app từ đầu |

---

#### WEEK 7 — ROUTE53 + CLOUDWATCH + CLOUDFRONT
*Nguồn: aws.pdf — Step 2*

| Ngày | Chủ đề | Lab |
|---|---|---|
| Mon | Route53: Hosted Zones, DNS Records, Routing Policies | Tạo hosted zone, A record cho domain |
| Tue | CloudWatch: Metrics, Logs, Alarms, Dashboards | Tạo alarm CPU > 80%, dashboard EC2 |
| Wed | CloudWatch Logs: ship app logs lên CloudWatch | Cài CloudWatch agent, ship Nginx logs |
| Thu | CloudFront: Distributions, Behaviors, Cache | Tạo CDN cho S3 static site |
| Fri | HTTPS: ACM Certificate, attach ALB/CloudFront | Tạo SSL cert miễn phí với ACM |
| Sat | Debug scenario: website down — trace qua Route53 → ALB → EC2 | Simulate và debug 502/504 |
| Sun | Review + incident report | Viết post-mortem cho debug session |

---

#### WEEK 8 — RDS + ECS + CLOUD PROJECT 1
*Nguồn: aws.pdf — Steps 3-4*

| Ngày | Chủ đề | Lab |
|---|---|---|
| Mon | RDS: DB Instances, Storage Types, Backup/Restore | Tạo RDS PostgreSQL, kết nối từ EC2 |
| Tue | ECS: Clusters, Tasks, Services, Fargate | Deploy container lên ECS Fargate |
| Wed | ECR: Push Docker image, task definition reference | Build → push ECR → ECS deploy |
| Thu | Review Lambda cơ bản, API Gateway intro | Hello World Lambda + API Gateway |
| Fri-Sun | **PROJECT 1: AWS Docker Web App** | Deploy FastAPI + PostgreSQL + Nginx + HTTPS lên AWS |

**Project 1 Target Repo:** `aws-docker-webapp-deployment`
```
FastAPI app → Dockerfile → ECR → ECS Fargate
VPC (public/private subnets) → ALB → HTTPS (ACM)
RDS PostgreSQL (private subnet)
CloudWatch logs + alarm
GitHub Actions CI/CD (build → push ECR → deploy ECS)
README + architecture diagram
```

---

### THÁNG 3: TERRAFORM + CI/CD (Weeks 9-12)

**Mục tiêu:** Infrastructure as Code + Automation pipeline hoàn chỉnh

---

#### WEEK 9 — TERRAFORM CƠ BẢN
*Nguồn: devops.pdf — Provisioning*

| Ngày | Chủ đề | Lab |
|---|---|---|
| Mon | Terraform concepts: providers, resources, state, plan/apply/destroy | Hello Terraform: tạo S3 bucket |
| Tue | Terraform: variables, outputs, data sources | Parameterize EC2 instance |
| Wed | Terraform: modules (reusable), remote state (S3 backend) | Module cho VPC |
| Thu | Terraform: EC2 + VPC + Security Group (complete) | Provision full VPC stack với Terraform |
| Fri | Terraform: state troubleshooting, drift, import | Fix state conflict, terraform import |
| Sat | Terraform: ECS Fargate deploy | Provision ECS từ Terraform |
| Sun | Review + diagram Terraform architecture | Vẽ sơ đồ infra code |

---

#### WEEK 10 — GITHUB ACTIONS CI/CD
*Nguồn: devops.pdf — CI/CD Tools*

| Ngày | Chủ đề | Lab |
|---|---|---|
| Mon | GitHub Actions: syntax, triggers, jobs, steps, runners | Hello World workflow |
| Tue | GitHub Actions: secrets, environment variables | Lưu AWS credentials vào secrets |
| Wed | CI: Build + test Docker image automatically | Workflow: push → build image → test |
| Thu | CD: Push ECR + deploy ECS khi merge main | Full CI/CD pipeline |
| Fri | GitHub Actions: Terraform apply trong pipeline | Infra CI/CD: PR → plan, merge → apply |
| Sat | Debug failing pipeline: common errors + fixes | Fix 5 lỗi thường gặp trong Actions |
| Sun | Review + document pipeline architecture | |

---

#### WEEK 11 — ANSIBLE + NGINX + WEB SERVERS
*Nguồn: devops.pdf — Config Management + Web Servers*

| Ngày | Chủ đề | Lab |
|---|---|---|
| Mon | Nginx: reverse proxy, config structure | Config Nginx → FastAPI backend |
| Tue | Nginx: HTTPS, SSL termination, headers | HTTPS với Nginx + Certbot |
| Wed | Debug Nginx: 502 Bad Gateway, 504 Timeout | Diagnose + fix 5 Nginx lỗi phổ biến |
| Thu | Ansible: inventory, playbooks, tasks, roles, variables | Ansible playbook deploy Nginx + app |
| Fri | Ansible: idempotency, templates, handlers | Template config động cho nhiều env |
| Sat | Ansible: deploy app tự động hóa hoàn toàn | Zero-touch deployment với Ansible |
| Sun | Review + PROJECT 2 planning | |

---

#### WEEK 12 — PROJECT 2: TERRAFORM INFRA
*Portfolio project thứ 2*

| Ngày | Chủ đề |
|---|---|
| Mon-Tue | Terraform: VPC + EC2 + RDS + Security Groups hoàn chỉnh |
| Wed-Thu | GitHub Actions: Terraform plan (PR) → apply (merge main) |
| Fri | README + architecture diagram (draw.io/Mermaid) |
| Sat | Documentation: module usage, variable reference |
| Sun | Code review + cleanup + push GitHub |

**Project 2 Target Repo:** `terraform-aws-cloud-infra`
```
modules/vpc, modules/ec2, modules/rds, modules/security
S3 backend + DynamoDB state lock
GitHub Actions: plan on PR, apply on merge
README với architecture diagram
```

---

### THÁNG 4: KUBERNETES (Weeks 13-16)

**Mục tiêu:** K8s từ cơ bản đến production-ready deployment

---

#### WEEK 13 — KUBERNETES FUNDAMENTALS
*Nguồn: kubernetes.pdf*

| Ngày | Chủ đề | Lab |
|---|---|---|
| Mon | K8s Overview: Pods, Nodes, Control Plane, Worker Nodes | Cài kind/minikube local |
| Tue | Pods, ReplicaSets, Deployments | Deploy 3 replicas nginx pod |
| Wed | Services: ClusterIP, NodePort, LoadBalancer, Ingress | Expose app ra ngoài |
| Thu | ConfigMaps + Secrets: inject config vào Pod | Config DB creds qua Secrets |
| Fri | Resource Requests/Limits, Namespaces, Quotas | Set CPU/Memory limits |
| Sat | kubectl: get, describe, logs, exec, apply, delete | Thực hành 30 kubectl commands |
| Sun | Review + lab notes |

---

#### WEEK 14 — KUBERNETES STORAGE + SECURITY + MONITORING

| Ngày | Chủ đề | Lab |
|---|---|---|
| Mon | Volumes, PVC, PV, StorageClass | Deploy PostgreSQL với PVC |
| Tue | StatefulSets: cho databases | Deploy Redis StatefulSet |
| Wed | RBAC: Roles, RoleBindings, ServiceAccounts | Limit quyền cho service account |
| Thu | Network Policies: pod-to-pod isolation | Chỉ allow frontend → backend |
| Fri | Horizontal Pod Autoscaler (HPA) | Auto scale khi CPU > 70% |
| Sat | Monitoring: Prometheus + Grafana trên K8s | Helm install kube-prometheus-stack |
| Sun | Review + diagram |

---

#### WEEK 15 — HELM + GITOPS + DEPLOYMENT PATTERNS

| Ngày | Chủ đề | Lab |
|---|---|---|
| Mon | Helm: charts, values, templates, release | Helm install nginx-ingress |
| Tue | Helm: tạo custom chart cho app | Chart cho FastAPI app |
| Wed | Rolling Updates, Rollbacks | Deploy v2, kiểm tra, rollback v1 |
| Thu | Canary Deployments | 10% traffic → v2, 90% → v1 |
| Fri | Blue-Green Deployments | Switch traffic hoàn toàn |
| Sat | ArgoCD GitOps: sync Git → K8s tự động | Cài ArgoCD, tạo Application |
| Sun | Review + debug common K8s errors | |

---

#### WEEK 16 — EKS (AWS Kubernetes) + PROJECT 3

| Ngày | Chủ đề | Lab |
|---|---|---|
| Mon | EKS: tạo cluster với eksctl | eksctl create cluster |
| Tue | EKS: node groups, IAM roles, ALB Ingress Controller | IRSA (IAM Roles for Service Accounts) |
| Wed | EKS: deploy app từ Week 13 lên EKS | Full production deploy |
| Thu | EKS: Cluster Autoscaler, HPA | Auto scale nodes + pods |
| Fri-Sun | **PROJECT 3: K8s Production Deploy** | Deploy microservices app lên EKS |

**Project 3 Target Repo:** `kubernetes-eks-production-deploy`
```
App: FastAPI + PostgreSQL + Redis
Helm charts cho tất cả services
EKS cluster (Terraform provisioned)
ArgoCD GitOps pipeline
Prometheus + Grafana monitoring
HPA + Cluster Autoscaler
README + runbook + architecture diagram
```

---

### THÁNG 5: MONITORING + SECURITY + SRE (Weeks 17-20)

**Mục tiêu:** Observability toàn diện + Security hardening + SRE practices

---

#### WEEK 17 — MONITORING & OBSERVABILITY
*Nguồn: devops.pdf — Infrastructure Monitoring, Logs Management*

| Ngày | Chủ đề | Lab |
|---|---|---|
| Mon | Prometheus: scraping, exporters, alerting rules | Prometheus + node_exporter |
| Tue | Grafana: dashboards, panels, datasources | Dashboard EC2 metrics |
| Wed | Loki + Promtail: log aggregation | Ship app logs → Loki → Grafana |
| Thu | CloudWatch: custom metrics, log insights queries | Query logs bằng CloudWatch Insights |
| Fri | Alertmanager: routing alerts → Slack/email | Setup alert khi service down |
| Sat | OpenTelemetry: tracing cơ bản | Distributed tracing với OTEL |
| Sun | Review + write SRE runbook | SLI/SLO/SLA definition |

---

#### WEEK 18 — SECURITY HARDENING

| Ngày | Chủ đề | Lab |
|---|---|---|
| Mon | AWS Security: IAM least privilege, SCPs | IAM policy review + tighten |
| Tue | AWS Security: Security Hub, GuardDuty (intro) | Enable GuardDuty, review findings |
| Wed | Secret Management: AWS Secrets Manager, Vault | Migrate hardcoded secrets → SSM/Vault |
| Thu | Container Security: Trivy scan, CIS benchmark | Scan tất cả images trong project |
| Fri | K8s Security: Pod Security Admission, network policies | Apply PSA restricted mode |
| Sat | SSL/TLS, HTTPS hardening, OWASP cơ bản | Check SSL Labs grade A |
| Sun | Security checklist + review |

---

#### WEEK 19 — ADVANCED CICD + GITOPS

| Ngày | Chủ đề | Lab |
|---|---|---|
| Mon | Multi-environment pipeline: dev/staging/prod | GitHub Actions: branch → environment |
| Tue | Artifact Management: ECR lifecycle + versioning | Auto-delete old images |
| Wed | FluxCD vs ArgoCD so sánh | Setup FluxCD thử nghiệm |
| Thu | Sealed Secrets + External Secrets Operator | Git-safe secret management |
| Fri | Jenkins giới thiệu (nhiều công ty VN dùng) | Jenkinsfile pipeline |
| Sat | GitLab CI giới thiệu | .gitlab-ci.yml pipeline |
| Sun | Review + optimize pipeline performance |

---

#### WEEK 20 — SRE PRACTICES + DISASTER RECOVERY

| Ngày | Chủ đề | Lab |
|---|---|---|
| Mon | SRE concepts: SLI, SLO, SLA, Error Budget | Define SLO cho app của mình |
| Tue | Incident Management: runbooks, on-call, post-mortem | Viết incident runbook template |
| Wed | Chaos Engineering: simulate failures | Kill pod, check recovery time |
| Thu | Backup/Restore: RDS snapshot, S3 cross-region | Restore từ snapshot, verify data |
| Fri | DR scenarios: RTO/RPO, multi-region failover | Diagram DR architecture |
| Sat | Performance tuning: EC2, RDS, K8s | Benchmark + optimize |
| Sun | Review tháng 5, chuẩn bị AWS Cert |

---

### THÁNG 6: AWS CERTIFICATION + JOB PREP (Weeks 21-26)

**Mục tiêu:** Pass AWS SAA-C03 + hoàn thiện portfolio + phỏng vấn

---

#### WEEK 21-23 — AWS SOLUTIONS ARCHITECT ASSOCIATE (SAA-C03)

**Tài liệu học:**
- Stephane Maarek (Udemy) — khóa tốt nhất
- AWS Skill Builder (free) — practice labs
- Tutorials Dojo Practice Exams (paid, rất xứng đáng)
- AWS Documentation (official)

| Tuần | Chủ đề SAA-C03 |
|---|---|
| Week 21 | EC2 advanced + Storage (EBS, S3, EFS, Glacier) + Databases (RDS, Aurora, DynamoDB, ElastiCache) |
| Week 22 | High Availability (ALB, NLB, ASG) + Networking (VPC, Direct Connect, VPN, CloudFront, Route53) + Serverless (Lambda, API GW, SQS, SNS, Kinesis) |
| Week 23 | Security (IAM, KMS, SSM, Shield, WAF) + Cost Optimization + Well-Architected Framework + Practice exams 65 câu |

**Target:** Practice exam score ≥ 82% trước khi đăng ký thi

---

#### WEEK 24 — PORTFOLIO POLISHING

| Task | Chi tiết |
|---|---|
| README hoàn chỉnh | Architecture diagram + badges + setup guide cho cả 3 repo |
| GitHub Profile | README.md cá nhân, pinned repos, contribution graph |
| Blog/Documentation | Viết 2-3 bài technical blog (dev.to / Viblo.asia) |
| Architecture Diagrams | Dùng draw.io, AWS Architecture Icons cho cả 3 projects |
| Cost analysis | Document AWS cost của từng project, giải thích cost optimization |
| Demo videos | Screen record demo deployment process |

---

#### WEEK 25 — CV + LINKEDIN + JOB APPLICATION

| Task | Chi tiết |
|---|---|
| CV Technical | 1 trang, skills section rõ ràng, projects với impact metrics |
| LinkedIn | Cập nhật headline: "Junior Cloud/DevOps Engineer AWS SAA" |
| GitHub | Tất cả repos public, README đẹp, commit history sạch |
| ITviec/TopDev | Apply 5 JD/ngày, filter: Cloud/DevOps Junior HCM |
| Salary negotiation | Target: 18-22M cho vị trí đầu với SAA cert |

---

#### WEEK 26 — PHỎNG VẤN KỸ THUẬT

**50 câu hỏi phỏng vấn thường gặp:**

**Linux:**
- systemd vs SysV init?
- Khi server load cao, debug thế nào?
- Giải thích inode là gì?

**Docker:**
- Sự khác nhau COPY vs ADD trong Dockerfile?
- Docker network modes?
- Làm sao giảm image size?

**AWS:**
- Giải thích VPC architecture của Project 1 của bạn?
- Khi nào dùng NAT Gateway vs NAT Instance?
- Sự khác nhau ALB vs NLB?
- S3 storage classes và khi nào dùng?
- IAM Role vs IAM User?

**Terraform:**
- terraform plan vs apply vs destroy?
- Xử lý state conflict thế nào?
- Module là gì, tại sao dùng?

**Kubernetes:**
- Pod vs Deployment vs StatefulSet?
- Khi Pod CrashLoopBackOff, debug thế nào?
- HPA hoạt động thế nào?

**CI/CD:**
- Giải thích pipeline của Project 2?
- Zero-downtime deployment là gì?
- Blue-green vs Canary khác nhau thế nào?

**Behavioral:**
- Kể về lần bạn debug sự cố production?
- Bạn học công nghệ mới như thế nào?

---

## PORTFOLIO PROJECTS SUMMARY

### Project 1: AWS Docker Web App Deployment
**Repo:** `aws-docker-webapp-deployment`
**Stack:** FastAPI + PostgreSQL + Docker + ECS Fargate + ALB + ACM + RDS + GitHub Actions
**Highlights:** Full HTTPS, auto CI/CD, CloudWatch monitoring

### Project 2: Terraform AWS Infrastructure
**Repo:** `terraform-aws-cloud-infra`
**Stack:** Terraform modules (VPC/EC2/RDS/SG) + S3 state backend + DynamoDB lock + GitHub Actions
**Highlights:** IaC hoàn toàn, idempotent, documented modules

### Project 3: Kubernetes Production Deployment
**Repo:** `kubernetes-eks-production-deploy`
**Stack:** EKS + Helm + ArgoCD + Prometheus + Grafana + Loki + HPA + Cluster Autoscaler
**Highlights:** GitOps, auto-scaling, full observability stack

---

## CÔNG CỤ & SETUP

### Đã cài sẵn (từ sessions trước):
- WSL2 Ubuntu, Docker Desktop, VS Code, Git
- AWS CLI (aws-cli/2.34.52), Terraform (v1.15.4), Helm (v4.2.0)
- kubectl v1.34.1, Python 3.13, Node v24.14

### Cần cài thêm:
```bash
# WSL Ubuntu
sudo apt install -y trivy  # container security scanner
pip install ansible         # configuration management
pip install boto3           # AWS SDK Python

# Windows
winget install --id eksctl.eksctl      # EKS cluster management
winget install --id ArgoProj.ArgoCD   # GitOps
```

---

## NGÂN SÁCH AWS ƯỚC TÍNH

| Dịch vụ | Chi phí/tháng | Ghi chú |
|---|---|---|
| EC2 t2.micro | $0 | Free tier 12 tháng đầu |
| RDS db.t3.micro | $0 | Free tier 750h/tháng |
| S3 | < $1 | Free 5GB |
| ECS Fargate | ~$5-15 | Chỉ chạy khi lab |
| EKS Cluster | ~$7/ngày | Tạo → dùng → destroy ngay |
| **Total** | **~$20-40/tháng** | Nếu destroy khi xong lab |

**QUAN TRỌNG:** Luôn `terraform destroy` sau lab, đặt billing alarm $20

---

## CHECKLIST JOB-READY

- [ ] AWS SAA-C03 certified
- [ ] 3 GitHub repos công khai với README đầy đủ
- [ ] Architecture diagrams cho cả 3 projects
- [ ] CI/CD pipeline hoạt động thực tế (không fake)
- [ ] Screenshot deployment process
- [ ] 2+ bài viết kỹ thuật (Viblo.asia / dev.to)
- [ ] CV 1 trang cập nhật
- [ ] LinkedIn với "Open to Work"
- [ ] 50 câu phỏng vấn đã trả lời được
- [ ] Đã apply ≥ 30 vị trí

---

## RESOURCES HỌC TẬP

### Miễn phí:
- roadmap.sh (đã có 7 PDF)
- AWS Free Tier + AWS Skill Builder
- KodeKloud Play With K8s (free playground)
- GitHub Student Pack
- Viblo.asia (cộng đồng IT VN)
- YouTube: TechWorld with Nana, freeCodeCamp, NetworkChuck

### Có phí (đáng đầu tư):
- Stephane Maarek AWS SAA (~400K, Udemy sale thường xuyên)
- Tutorials Dojo Practice Exams SAA-C03 (~200K)
- KodeKloud DevOps Labs (~300K/tháng, hữu ích cho K8s lab)

---

*Lộ trình được xây dựng từ: 7 roadmap PDFs (roadmap.sh) + phân tích thị trường ITviec/TopDev/LinkedIn Vietnam 2025-2026 + sessions học trước. Cập nhật: 2026-08.*
