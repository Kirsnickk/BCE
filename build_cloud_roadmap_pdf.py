
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm
from reportlab.platypus import (SimpleDocTemplate, Paragraph, Spacer,
                                 Table, TableStyle, HRFlowable, PageBreak)
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics

pdfmetrics.registerFont(TTFont('Arial', 'C:/Windows/Fonts/arial.ttf'))
pdfmetrics.registerFont(TTFont('Arial-Bold', 'C:/Windows/Fonts/arialbd.ttf'))
pdfmetrics.registerFont(TTFont('Arial-Italic', 'C:/Windows/Fonts/ariali.ttf'))

OUTPUT = r'C:\Users\vandu\Documents\cloud_engineer_6month_roadmap.pdf'

doc = SimpleDocTemplate(OUTPUT, pagesize=A4,
    rightMargin=1.5*cm, leftMargin=1.5*cm,
    topMargin=1.5*cm, bottomMargin=1.5*cm)

styles = getSampleStyleSheet()

BLUE   = colors.HexColor('#0F4C81')
NAVY   = colors.HexColor('#1A5276')
GREEN  = colors.HexColor('#1E8449')
ORANGE = colors.HexColor('#D35400')
GRAY   = colors.HexColor('#BDC3C7')
LGRAY  = colors.HexColor('#F4F6F7')

def ST(name, parent='Normal', **kw):
    # If fontName is in kw, use it, otherwise default to Arial
    font = kw.pop('fontName', 'Arial')
    return ParagraphStyle(name, parent=styles[parent], fontName=font, **kw)

t_style  = ST('T', fontSize=22, fontName='Arial-Bold', alignment=TA_CENTER,
               textColor=BLUE, spaceAfter=4)
s_style  = ST('S', fontSize=13, fontName='Arial-Bold', alignment=TA_CENTER,
               textColor=ORANGE, spaceAfter=10)
h1       = ST('H1', fontSize=13, fontName='Arial-Bold', textColor=BLUE,
               spaceBefore=12, spaceAfter=4)
h2       = ST('H2', fontSize=11, fontName='Arial-Bold', textColor=NAVY,
               spaceBefore=8, spaceAfter=3)
h3       = ST('H3', fontSize=10, fontName='Arial-Bold', textColor=colors.HexColor('#2874A6'),
               spaceBefore=6, spaceAfter=2)
body     = ST('B', fontSize=9, leading=14, spaceAfter=3)
blt      = ST('BL', fontSize=9, leading=13, leftIndent=12, spaceAfter=2)
note     = ST('N', fontSize=8, textColor=colors.HexColor('#7F8C8D'), leftIndent=6, spaceAfter=4)

story = []

def hr(color=GRAY, t=0.5):
    return HRFlowable(width='100%', thickness=t, color=color,
                      spaceAfter=5, spaceBefore=5)

def T(data, widths, hbg=BLUE):
    tbl = Table(data, colWidths=widths, repeatRows=1)
    tbl.setStyle(TableStyle([
        ('FONTNAME',     (0,0), (-1,0),  'Arial-Bold'),
        ('FONTNAME',     (0,1), (-1,-1), 'Arial'),
        ('FONTSIZE',     (0,0), (-1,0),  9),
        ('FONTSIZE',     (0,1), (-1,-1), 8.5),
        ('BACKGROUND',   (0,0), (-1,0),  hbg),
        ('TEXTCOLOR',    (0,0), (-1,0),  colors.white),
        ('ROWBACKGROUNDS',(0,1),(-1,-1), [LGRAY, colors.white]),
        ('GRID',         (0,0), (-1,-1), 0.3, GRAY),
        ('VALIGN',       (0,0), (-1,-1), 'MIDDLE'),
        ('ALIGN',        (0,0), (-1,-1), 'LEFT'),
        ('TOPPADDING',   (0,0), (-1,-1), 4),
        ('BOTTOMPADDING',(0,0), (-1,-1), 4),
        ('LEFTPADDING',  (0,0), (-1,-1), 5),
    ]))
    return tbl

# ── TITLE ──────────────────────────────────────────────────────────────────
story += [
    Spacer(1, 0.5*cm),
    Paragraph('LO TRINH 6 THANG TRO THANH', t_style),
    Paragraph('CLOUD ENGINEER', ParagraphStyle('XX', parent=t_style, fontSize=26, textColor=ORANGE)),
    Paragraph('Phan tich 7 Roadmap PDFs (roadmap.sh) + Thi truong Viet Nam 2025-2026', s_style),
    hr(BLUE, 2),
]

ov = [
    ['THONG TIN', 'CHI TIET'],
    ['Thoi gian', '6 thang (26 tuan)'],
    ['Phuong phap', 'Hybrid: Job-task-first + Project-first + Lab thuc hanh'],
    ['Muc tieu', 'Junior Cloud/DevOps Engineer HCM — 15-25M VND'],
    ['Chung chi', 'AWS Solutions Architect Associate SAA-C03'],
    ['Portfolio', '3 GitHub repos + Runbooks + Architecture Diagrams'],
    ['Tools da co', 'WSL2/Ubuntu, Docker, AWS CLI 2.34, Terraform 1.15, kubectl, Helm'],
]
story.append(T(ov, [5.5*cm, 12*cm], NAVY))
story.append(Spacer(1, 0.4*cm))

# ── 1. MARKET ──────────────────────────────────────────────────────────────
story += [hr(BLUE,1), Paragraph('1. YEU CAU THI TRUONG VIET NAM 2025-2026', h1)]
story.append(Paragraph('Phan tich JD tu ITviec, TopDev, LinkedIn — TP.Ho Chi Minh:', body))

mk = [
    ['Ky nang / Cong nghe', 'Tan suat JD', 'Muc do'],
    ['Linux (Ubuntu/CentOS/RHEL)', '90%', 'Bat buoc'],
    ['Git / GitHub', '95%', 'Bat buoc'],
    ['Docker & Containers', '85%', 'Bat buoc'],
    ['AWS (EC2, VPC, IAM, S3, CloudWatch)', '80%', 'Bat buoc'],
    ['CI/CD (GitHub Actions / Jenkins)', '75%', 'Bat buoc'],
    ['Networking (TCP/IP, DNS, CIDR, SSH)', '70%', 'Quan trong'],
    ['Kubernetes (EKS/k8s)', '65%', 'Quan trong'],
    ['Terraform / IaC', '60%', 'Quan trong'],
    ['Python scripting', '55%', 'Quan trong'],
    ['Monitoring (Prometheus + Grafana)', '50%', 'Nen co'],
    ['Ansible / Config Management', '40%', 'Them diem'],
]
story.append(T(mk, [6.5*cm, 4*cm, 7*cm]))
story.append(Spacer(1, 0.25*cm))

sal = [
    ['Level', 'Kinh nghiem', 'Luong HCM'],
    ['Junior Cloud/DevOps', '0-1 nam + SAA cert + 3 projects', '15 - 22M VND'],
    ['Mid-level', '1-3 nam', '25 - 40M VND'],
    ['Senior', '3+ nam', '40 - 70M VND'],
]
story.append(T(sal, [5*cm, 6*cm, 6.5*cm], GREEN))
story.append(Spacer(1, 0.4*cm))

# ── 2. ROADMAP ORDER ───────────────────────────────────────────────────────
story += [hr(BLUE,1), Paragraph('2. THU TU HOC TOI UU TU 7 ROADMAP PDFs', h1)]

flow = [
    ['Buoc', 'Cong nghe', 'Nguon PDF', 'Tuan'],
    ['1', 'Linux Fundamentals (Shell, Process, Service, Networking)', 'linux.pdf', 'Week 1-2'],
    ['2', 'Networking & Protocols (TCP/IP, DNS, SSH, HTTP/S, Subnetting)', 'network-engineer.pdf', 'Week 2'],
    ['3', 'Git, Bash Scripting, Python co ban', 'devops.pdf', 'Week 3'],
    ['4', 'Docker (Dockerfile, Compose, Registry, Security, multi-stage)', 'docker.pdf', 'Week 4'],
    ['5', 'AWS Core Services (IAM -> VPC -> EC2 -> S3 -> CloudWatch)', 'aws.pdf', 'Week 5-8'],
    ['6', 'CI/CD — GitHub Actions', 'devops.pdf', 'Week 10'],
    ['7', 'Terraform — Infrastructure as Code', 'devops.pdf', 'Week 9-12'],
    ['8', 'Kubernetes (K8s/EKS + Helm + GitOps + Autoscaling)', 'kubernetes.pdf', 'Week 13-16'],
    ['9', 'Monitoring (Prometheus, Grafana, Loki, CloudWatch)', 'devops.pdf', 'Week 17'],
    ['10', 'Security (IAM least-privilege, RBAC, Secrets, Container Sec)', 'aws.pdf + kubernetes.pdf', 'Week 18'],
    ['11', 'AWS Certification SAA-C03 (review all above)', 'all', 'Week 21-23'],
]
story.append(T(flow, [0.8*cm, 7.5*cm, 4.5*cm, 3.5*cm]))
story.append(PageBreak())

# ── 3. DETAILS ─────────────────────────────────────────────────────────────
story += [Paragraph('3. LO TRINH CHI TIET 6 THANG', h1), hr(BLUE,1.5)]

# Month 1
story += [Paragraph('THANG 1: NEN TANG HE THONG (Weeks 1-4)', h2)]
story.append(Paragraph('Muc tieu: Vung Linux, Networking, Git, Docker — nen tang bat buoc', body))
m1 = [
    ['Tuan', 'Chu de', 'Lab thuc hanh', 'Output'],
    ['Week 1', 'Linux Fundamentals\n(Navigation, Permissions, Process, Service, Package Mgmt)',
     '50+ lenh WSL Ubuntu\nTao systemd service\nCai + cau hinh Nginx',
     'linux-admin-labs/week1/\nrunbook.md'],
    ['Week 2', 'Linux Advanced + Networking\n(Disk/LVM, Shell Script, SSH, DNS, TCP/IP, Subnetting)',
     'Script tu dong backup\nSSH key-based auth\nDebug website down',
     'linux-admin-labs/week2/\nscripts/ + runbooks/'],
    ['Week 3', 'Git + Bash + Python co ban\n(branch, merge, conflict, scripting, cron, boto3)',
     'Tao repo cloud-job-task-labs\nScript health-check cron\nPython goi API + JSON',
     'cloud-job-task-labs/ repo\nREADME.md'],
    ['Week 4', 'Docker Fundamentals\n(Dockerfile, Compose, Registry, Security, multi-stage build)',
     'Docker compose: FastAPI + PostgreSQL\nBuild multi-stage image\nTrivy scan + push DockerHub',
     'task-04-docker-deploy/\ndockerfile + compose.yaml'],
]
story.append(T(m1, [1.5*cm, 5.5*cm, 6*cm, 4.5*cm]))
story.append(Spacer(1, 0.3*cm))

# Month 2
story += [Paragraph('THANG 2: AWS CORE SERVICES (Weeks 5-8)', h2)]
story.append(Paragraph('Muc tieu: Thanh thao IAM, VPC, EC2, S3, CloudWatch, Route53, RDS, ECS', body))
m2 = [
    ['Tuan', 'Chu de', 'Lab', 'Output'],
    ['Week 5', 'AWS Setup + IAM + VPC\n(MFA, billing alarm, Users/Roles, CIDR, Subnets, IGW, NAT GW)',
     'Setup account an toan\nTao VPC 10.0.0.0/16\nDiagram architecture',
     'VPC diagram draw.io\nIAM policy review'],
    ['Week 6', 'EC2 + S3 + Deploy\n(Instance types, Elastic IP, AMI, ASG, S3 storage classes)',
     'Launch EC2, SSH vao\nDeploy Nginx + FastAPI\nBoto3 backup -> S3',
     'task-10-aws-ec2-deploy/\nBackup automation script'],
    ['Week 7', 'Route53 + CloudWatch + CloudFront\n(DNS, Metrics, Logs, Alarms, CDN, HTTPS/ACM)',
     'Setup domain + HTTPS\nCloudWatch alarm CPU>80%\nDebug 502/504 scenario',
     'task-07-nginx-502-debug/\nPost-mortem report'],
    ['Week 8', 'RDS + ECS + PROJECT 1\n(RDS PostgreSQL, ECS Fargate, ECR, GitHub Actions CI/CD)',
     'ECS Fargate deploy\nRDS private subnet\nFull CI/CD pipeline\nPROJECT 1 complete',
     'aws-docker-webapp-deployment\n(repo hoan chinh)'],
]
story.append(T(m2, [1.5*cm, 5.5*cm, 6*cm, 4.5*cm]))
story.append(Spacer(1, 0.2*cm))

cost = [
    ['AWS Service', 'Chi phi uoc tinh', 'Ghi chu'],
    ['EC2 t2.micro', '$0', 'Free tier 12 thang dau'],
    ['RDS db.t3.micro', '$0', 'Free tier 750h/thang'],
    ['S3 (5GB)', '< $1', 'Gan nhu mien phi'],
    ['ECS Fargate', '~$5-15/thang', 'Chi chay khi lab, destroy xong'],
    ['EKS Cluster', '~$7/ngay', 'Tao -> dung -> destroy ngay sau lab'],
    ['TONG uoc tinh', '~$20-40/thang', 'Neu destroy sau moi lab'],
]
story.append(T(cost, [5*cm, 4*cm, 8.5*cm], ORANGE))
story.append(Paragraph('QUAN TRONG: Luon terraform destroy sau lab. Dat billing alarm $20. Khong dung root account.', note))
story.append(Spacer(1, 0.3*cm))

# Month 3
story += [Paragraph('THANG 3: TERRAFORM + CI/CD + ANSIBLE (Weeks 9-12)', h2)]
m3 = [
    ['Tuan', 'Chu de', 'Lab', 'Output'],
    ['Week 9', 'Terraform Co ban\n(providers, state, modules, S3 backend, DynamoDB lock)',
     'S3 bucket -> EC2+VPC+SG -> ECS\nFix state conflict, terraform import',
     'modules/vpc + modules/ec2'],
    ['Week 10', 'GitHub Actions CI/CD\n(secrets, multi-env, Terraform pipeline)',
     'CI: build+test Docker\nCD: push ECR + deploy ECS\nInfra: PR->plan, merge->apply',
     'github-actions-cloud-cicd/ repo'],
    ['Week 11', 'Nginx + Ansible\n(reverse proxy, HTTPS Certbot, playbooks, templates)',
     'Nginx HTTPS + Ansible deploy\nDebug 5 Nginx loi pho bien',
     'task-06-nginx/\nansible-playbooks/'],
    ['Week 12', 'PROJECT 2: Terraform AWS Infra\n(full modules + CI/CD infra pipeline)',
     'VPC+EC2+RDS complete\nGitHub Actions plan->apply\nREADME + architecture diagram',
     'terraform-aws-cloud-infra\n(repo hoan chinh)'],
]
story.append(T(m3, [1.5*cm, 5.5*cm, 6*cm, 4.5*cm]))
story.append(PageBreak())

# Month 4
story += [Paragraph('THANG 4: KUBERNETES — K8s + EKS (Weeks 13-16)', h2)]
m4 = [
    ['Tuan', 'Chu de', 'Lab', 'Output'],
    ['Week 13', 'K8s Fundamentals\n(Pods, Deployments, Services, ConfigMaps, Secrets, kubectl)',
     'kind/minikube local cluster\nDeploy 3-replica nginx\nConfigMap + Secret inject',
     'k8s-labs/ YAML files'],
    ['Week 14', 'K8s Storage + Security + Monitoring\n(PVC, StatefulSet, RBAC, Network Policy, HPA, Prometheus)',
     'PostgreSQL StatefulSet\nRBAC service account\nHelm install prometheus-stack',
     'monitoring/ namespace setup'],
    ['Week 15', 'Helm + GitOps + Deploy Patterns\n(Helm charts, ArgoCD, Rolling, Canary, Blue-Green)',
     'Custom Helm chart FastAPI\nArgoCD sync Git -> K8s\nCanary 10%->50%->100%',
     'helm-charts/ + argocd-apps/'],
    ['Week 16', 'EKS + PROJECT 3\n(eksctl, IRSA, ALB Ingress, Cluster Autoscaler)',
     'eksctl create cluster\nDeploy production app\nFull observability stack',
     'kubernetes-eks-production-deploy\n(repo hoan chinh)'],
]
story.append(T(m4, [1.5*cm, 5.5*cm, 6*cm, 4.5*cm]))
story.append(Spacer(1, 0.3*cm))

# Month 5
story += [Paragraph('THANG 5: MONITORING + SECURITY + SRE (Weeks 17-20)', h2)]
m5 = [
    ['Tuan', 'Chu de', 'Lab', 'Output'],
    ['Week 17', 'Monitoring & Observability\n(Prometheus, Grafana, Loki, Alertmanager, OpenTelemetry)',
     'Dashboard EC2 + K8s metrics\nShip logs Loki -> Grafana\nAlert Slack khi service down',
     'monitoring-stack/ setup\nSLI/SLO definition'],
    ['Week 18', 'Security Hardening\n(IAM least privilege, GuardDuty, Secrets Manager, Trivy, K8s RBAC)',
     'Migrate secrets -> SSM\nScan tat ca images\nApply Pod Security Admission',
     'Security checklist\nHardened infra configs'],
    ['Week 19', 'Advanced CI/CD + GitOps\n(Multi-env pipeline, Sealed Secrets, FluxCD, Jenkins)',
     'dev/staging/prod pipeline\nSealed Secrets trong Git\nJenkinsfile + GitLab CI',
     'Multi-env pipeline\n.gitlab-ci.yml example'],
    ['Week 20', 'SRE Practices + DR\n(SLI/SLO, Incident runbooks, Chaos Engineering, Backup/Restore)',
     'Define SLO cho apps\nKill pod check recovery\nRDS snapshot restore test',
     'SRE runbook template\nDR architecture diagram'],
]
story.append(T(m5, [1.5*cm, 5.5*cm, 6*cm, 4.5*cm]))
story.append(Spacer(1, 0.3*cm))

# Month 6
story += [Paragraph('THANG 6: AWS CERTIFICATION + JOB PREP (Weeks 21-26)', h2)]
m6 = [
    ['Tuan', 'Chu de', 'Tai lieu / Lab', 'Muc tieu'],
    ['Week 21-23', 'AWS SAA-C03\n(EC2+Storage, VPC+HA, Serverless, Security, Well-Architected)',
     'Stephane Maarek (Udemy)\nTutorials Dojo Practice Exams\nAWS Skill Builder labs',
     'Practice exam >= 82%\nDang ky thi Pearson VUE'],
    ['Week 24', 'Portfolio Polishing\n(README, diagrams, blogs, demo videos)',
     'draw.io + AWS Architecture Icons\nViblo.asia / dev.to blogs',
     '3 repos hoan chinh\n2+ bai viet ky thuat'],
    ['Week 25', 'CV + LinkedIn + Apply\n(1-trang CV, ITviec, TopDev, LinkedIn Optimize)',
     'CV technical template\nApply 5 JD/ngay',
     'Apply >= 30 vi tri\nTarget: 18-22M VND'],
    ['Week 26', 'Phong van ky thuat\n(50 cau technical + behavioral, system design co ban)',
     'Mock interview\nWhiteboard VPC design\nDebug scenarios',
     'Job offer 18-22M VND'],
]
story.append(T(m6, [2*cm, 5.5*cm, 5.5*cm, 4.5*cm]))
story.append(Spacer(1, 0.25*cm))

cert = [
    ['Tuan', 'Chu de SAA-C03', 'Practice Target'],
    ['Week 21', 'EC2 advanced, EBS/S3/EFS/Glacier, RDS/Aurora/DynamoDB/ElastiCache', 'Quiz theo tung service'],
    ['Week 22', 'ALB/NLB/ASG HA, VPC/Direct Connect/VPN, CloudFront/Route53, Lambda/SQS/SNS', 'Mini practice 30 cau'],
    ['Week 23', 'IAM/KMS/SSM/Shield/WAF, Cost Optimization, Well-Architected Framework', 'Full exam 65 cau >= 82%'],
]
story.append(T(cert, [1.5*cm, 10*cm, 6*cm], GREEN))
story.append(PageBreak())

# ── 4. PORTFOLIO ───────────────────────────────────────────────────────────
story += [hr(BLUE,1), Paragraph('4. PORTFOLIO PROJECTS — 3 GITHUB REPOS', h1)]
proj = [
    ['Project', 'Tech Stack', 'Highlights', 'Thang'],
    ['aws-docker-webapp-deployment',
     'FastAPI + PostgreSQL + Docker\nECS Fargate + ALB + ACM\nRDS + CloudWatch + GitHub Actions',
     'Full HTTPS, auto CI/CD\nCloudWatch monitoring\nArchitecture diagram day du',
     'Thang 2\n(Week 8)'],
    ['terraform-aws-cloud-infra',
     'Terraform modules (VPC/EC2/RDS/SG)\nS3 backend + DynamoDB lock\nGitHub Actions infra pipeline',
     'IaC hoan toan idempotent\nModules co document\nInfra PR review workflow',
     'Thang 3\n(Week 12)'],
    ['kubernetes-eks-production-deploy',
     'EKS + Helm + ArgoCD GitOps\nPrometheus + Grafana + Loki\nHPA + Cluster Autoscaler',
     'GitOps workflow\nAuto-scaling full stack\nProduction observability',
     'Thang 4\n(Week 16)'],
]
story.append(T(proj, [4.5*cm, 5*cm, 4.5*cm, 2.5*cm]))
story.append(Spacer(1, 0.4*cm))

# ── 5. INTERVIEW ───────────────────────────────────────────────────────────
story += [hr(BLUE,1), Paragraph('5. CAU HOI PHONG VAN KY THUAT (50 CAU)', h1)]

questions = {
    'Linux': [
        'Khi server load cao, debug the nao? (uptime, top, sar, vmstat, iostat)',
        'Hard link va soft link khac nhau the nao?',
        'systemd vs SysV init — when to use which?',
        'Inode la gi? Tai sao "no space left" du df con trong?',
        'Xem process dang dung port nao? (ss -tulnp, lsof -i)',
    ],
    'Docker': [
        'COPY vs ADD trong Dockerfile khac nhau the nao?',
        'Docker network modes: bridge vs host vs overlay vs macvlan?',
        'Lam sao giam image size? (multi-stage, .dockerignore, slim base image)',
        'Docker compose vs Docker Swarm — dung cai nao khi nao?',
        'Container bi OOMKilled — debug the nao?',
    ],
    'AWS': [
        'Giai thich VPC architecture cua Project 1 cua ban?',
        'NAT Gateway vs NAT Instance — khac nhau cho nao?',
        'ALB vs NLB — khi nao dung cai nao?',
        'S3 storage classes (Standard, IA, Glacier) — use case?',
        'IAM Role vs IAM User — best practice la gi?',
        'Lam sao thiet ke HA cho web app? (Multi-AZ, ASG, ALB)',
        'Security Group vs NACL — khac nhau the nao?',
        'Khi EC2 khong the ra internet, debug the nao?',
    ],
    'Terraform': [
        'terraform plan vs apply vs destroy?',
        'Xu ly state conflict the nao? (terraform state rm, mv)',
        'Module la gi, tai sao nen dung?',
        'Remote state voi S3 + DynamoDB lock hoat dong the nao?',
        'terraform import dung khi nao?',
        'Terraform workspace vs separate state files?',
    ],
    'Kubernetes': [
        'Pod vs Deployment vs StatefulSet — khi nao dung cai nao?',
        'Pod CrashLoopBackOff — debug the nao? (kubectl logs, describe, exec)',
        'HPA hoat dong the nao? Metrics source (Metrics Server)?',
        'ClusterIP vs NodePort vs LoadBalancer vs Ingress?',
        'RBAC: Role vs ClusterRole vs RoleBinding?',
        'Helm chart la gi, tai sao dung so voi raw YAML?',
        'ArgoCD/GitOps pattern hoat dong the nao?',
        'Pod khong schedule duoc — debug the nao? (node resources, taints)',
    ],
    'CI/CD & General': [
        'Giai thich pipeline CI/CD Project 2 tu dau den cuoi?',
        'Zero-downtime deployment — cac cach tiep can?',
        'Blue-green vs Canary deployment khac nhau the nao?',
        'Secret trong Git — lam sao xu ly an toan? (Sealed Secrets, Vault)',
        'SLI, SLO, SLA, Error Budget — vi du cu the?',
        'Khi nao dung ECS Fargate vs EKS?',
        'Cost optimization tren AWS — ban da lam gi trong projects?',
    ],
    'Behavioral': [
        'Ke ve lan ban debug su co production nghiem trong nhat?',
        'Ban hoc mot cong nghe moi nhu the nao? Vi du?',
        'Tai sao ban muon chuyen sang Cloud/DevOps Engineering?',
        'Khi team khong dong y giai phap cua ban, xu ly the nao?',
    ],
}

for topic, qs in questions.items():
    story.append(Paragraph(topic, h3))
    for q in qs:
        story.append(Paragraph(f'  {q}', blt))
    story.append(Spacer(1, 0.15*cm))

story.append(PageBreak())

# ── 6. CHECKLIST ───────────────────────────────────────────────────────────
story += [hr(BLUE,1), Paragraph('6. JOB-READY CHECKLIST', h1)]
chk = [
    ['Hang muc', 'Tieu chi', 'Deadline'],
    ['Certification', 'AWS SAA-C03 passed (score >= 750/1000)', 'Tuan 23'],
    ['GitHub Project 1', 'aws-docker-webapp-deployment — README day du + CI/CD hoat dong', 'Tuan 8'],
    ['GitHub Project 2', 'terraform-aws-cloud-infra — modules documented + infra pipeline', 'Tuan 12'],
    ['GitHub Project 3', 'kubernetes-eks-production-deploy — GitOps + monitoring stack', 'Tuan 16'],
    ['Tech Writing', '2+ bai blog tren Viblo.asia hoac dev.to', 'Tuan 24'],
    ['GitHub Profile', 'README ca nhan + pinned repos + contribution graph', 'Tuan 24'],
    ['CV', '1 trang, English, skills + projects noi bat', 'Tuan 25'],
    ['LinkedIn', 'Headline + Projects section + Open to Work', 'Tuan 25'],
    ['Job Applications', 'Apply >= 30 vi tri Cloud/DevOps Junior HCM', 'Tuan 25-26'],
    ['Mock Interviews', 'Tra loi tu tin 50 cau trong phan phong van', 'Tuan 26'],
]
story.append(T(chk, [4*cm, 9*cm, 2.5*cm], GREEN))
story.append(Spacer(1, 0.4*cm))

# ── 7. RESOURCES ───────────────────────────────────────────────────────────
story += [hr(BLUE,1), Paragraph('7. TAI LIEU HOC TAP', h1)]
res = [
    ['Loai', 'Tai lieu', 'Ghi chu'],
    ['MIEN PHI', 'roadmap.sh (7 PDFs da co)', 'Da phan tich — su dung ngay'],
    ['MIEN PHI', 'AWS Free Tier + AWS Skill Builder', 'Official hands-on labs'],
    ['MIEN PHI', 'KodeKloud Play With Kubernetes', 'K8s playground mien phi'],
    ['MIEN PHI', 'GitHub Student Pack', 'Free tools + credits'],
    ['MIEN PHI', 'YouTube: TechWorld with Nana, NetworkChuck, freeCodeCamp', 'Tot nhat YouTube DevOps'],
    ['MIEN PHI', 'Viblo.asia — cong dong IT Vietnam', 'Doc + viet bai ky thuat'],
    ['CO PHI', 'Stephane Maarek AWS SAA (Udemy ~400K)', 'TỐT NHAT — sale thuong xuyen'],
    ['CO PHI', 'Tutorials Dojo Practice Exams SAA-C03 (~200K)', 'Practice exam chuan nhat'],
    ['CO PHI', 'KodeKloud DevOps Labs (~300K/thang)', 'Tot cho K8s lab co huong dan'],
]
story.append(T(res, [2.5*cm, 7.5*cm, 7.5*cm]))
story.append(Spacer(1, 0.5*cm))
story.append(hr(BLUE, 1))
story.append(Paragraph(
    'Lo trinh xay dung tu: 7 Roadmap PDFs (roadmap.sh) + Phan tich thi truong Vietnam 2025-2026. '
    'Cap nhat: 2026-08.', note))

doc.build(story)
print('PDF da tao thanh cong:', OUTPUT)
