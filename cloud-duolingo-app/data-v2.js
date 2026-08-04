/* CloudOps Duo v2 enrichment. Giữ nguyên data.js v1 và chỉ bổ sung schema/dữ liệu. */
(() => {
  const D = window.CLOUD_APP_DATA;
  D.version = '2.0.0';
  D.description = 'Học Cloud/DevOps có câu hỏi sâu, lab mô phỏng và ôn tập Leitner.';
  const phaseInfo = {
    p1:{weeks:'Tuần 1–4',why:'Junior DevOps tại Endava cần xử lý Linux CLI, process, service, DNS và port khi triage ticket. Đây là năng lực để biến kinh nghiệm IT Ops thành bằng chứng vận hành, không chỉ là thuộc lệnh.'},
    p2:{weeks:'Tuần 5–8',why:'Cloud Operator cần hiểu VPC, subnet, firewall, IAM, backup và cost guardrail. Một EC2 không ra Internet phải được điều tra theo lớp thay vì thử ngẫu nhiên.'},
    p3:{weeks:'Tuần 9–12',why:'Các JD Dirox và OpenCommerce yêu cầu hạ tầng có thể tái tạo, pipeline có kiểm soát và tài liệu rollback. Terraform hoặc CI/CD không an toàn nếu deploy trước test hay để state/secrets thiếu kiểm soát.'},
    p4:{weeks:'Tuần 13–16',why:'Kubernetes/Helm là điểm cộng rõ rệt trong JD DevOps. Giá trị tuyển dụng nằm ở khả năng đọc describe/logs, tìm nguyên nhân Pod lỗi và giải thích quan hệ object, không phải chỉ apply YAML.'},
    p5:{weeks:'Tuần 17–20',why:'Monitoring, alerting, backup/DR và incident documentation xuất hiện trong JD vận hành production. Nhà tuyển dụng cần thấy bạn biến metric/log thành quyết định và prevention cụ thể.'},
    p6:{weeks:'Tuần 21–26',why:'Cloud Engineer độc lập thường cần production exposure; portfolio, SAA-C03, runbook và câu trả lời troubleshooting là cầu nối thực tế để ứng tuyển Junior DevOps, Cloud Operations hoặc Infrastructure & DevOps.'}
  };
  const lessonDetail = {
    p1l1:['Tuần 1','journalctl -u nginx -n 20','Xem 20 dòng log gần nhất của nginx','journalctl -u nginx -n 20'],
    p1l2:['Tuần 2','ss -tulnp','Liệt kê port đang lắng nghe và process sở hữu','ss -tulnp'],
    p1l3:['Tuần 3','git status','Kiểm tra thay đổi trước khi commit','git status'],
    p1l4:['Tuần 4','docker logs web --tail 20','Đọc 20 dòng log container web','docker logs web --tail 20'],
    p2l1:['Tuần 5','16','VPC 10.20.0.0/20 có bao nhiêu host khả dụng?','4094'],
    p2l2:['Tuần 5','24','Subnet /24 có bao nhiêu host khả dụng?','254'],
    p2l3:['Tuần 6','27','Subnet /27 có bao nhiêu host khả dụng?','30'],
    p2l4:['Tuần 8','26','Subnet /26 có bao nhiêu host khả dụng?','62'],
    p3l1:['Tuần 9','2','Tạo S3 bucket và security group bằng Terraform','resource "aws_s3_bucket" "logs" {\n  bucket = "cloudops-lab-logs"\n}\nresource "aws_security_group" "web" {\n  name = "web"\n}'],
    p3l2:['Tuần 9','3','Tạo module VPC có output vpc_id','module "vpc" {\n  source = "./modules/vpc"\n}\noutput "vpc_id" { value = module.vpc.vpc_id }'],
    p3l3:['Tuần 10','2','Sửa pipeline để test trước deploy','name: ci\non: [push]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - run: npm test\n  deploy:\n    needs: test\n    runs-on: ubuntu-latest\n    steps:\n      - run: ./deploy.sh'],
    p3l4:['Tuần 11','2','Khai báo Nginx theo Terraform mẫu','resource "null_resource" "nginx" {\n  provisioner "local-exec" { command = "ansible-playbook nginx.yml" }\n}'],
    p4l1:['Tuần 13','CrashLoopBackOff','Chẩn đoán container web liên tục crash','kubectl logs api-7d9f'],
    p4l2:['Tuần 13','Pending','Chẩn đoán Pod không được schedule','kubectl describe pod api-7d9f'],
    p4l3:['Tuần 14','ImagePullBackOff','Chẩn đoán image/container registry lỗi','kubectl describe pod api-7d9f'],
    p4l4:['Tuần 15','CrashLoopBackOff','Kiểm tra rollout release Helm bị lỗi','kubectl get pods'],
    p5l1:['Tuần 17','up','Truy vấn availability của các target','up'],
    p5l2:['Tuần 17','sum by (job) (up)','Nhóm availability theo job','sum by (job) (up)'],
    p5l3:['Tuần 19','rate(http_requests_total[5m])','Xem tốc độ request trong 5 phút','rate(http_requests_total[5m])'],
    p5l4:['Tuần 20','sum by (job) (rate(http_requests_total[5m]))','Tổng hợp request rate theo job','sum by (job) (rate(http_requests_total[5m]))'],
    p6l1:['Tuần 21–23','SAA','Làm đề mock SAA-C03 65 câu',''],
    p6l2:['Tuần 24','Portfolio','Làm đề mock SAA-C03 65 câu',''],
    p6l3:['Tuần 26','Interview','Làm đề mock SAA-C03 65 câu',''],
    p6l4:['Tuần 25','Apply','Làm đề mock SAA-C03 65 câu','']
  };
  const terminalOutput = '-- simulated output --\nnginx.service: active (running)\nAug 04 09:12:01 web[1211]: 200 GET /health\n';
  const terminalQuestion = (id, command, prompt) => ({id:id+'q4',type:'terminal',prompt,startingOutput:'learner@cloudops:~$ ',answer:command,acceptableAnswers:[command],simulatedOutput:terminalOutput,hint:'Ưu tiên lệnh nhỏ, đọc dữ kiện trước rồi mới thay đổi hệ thống.',explanation:'Đây là lệnh điều tra an toàn, tạo bằng chứng trước khi sửa.',xp:12});
  const matchQuestion = (id, pairs, prompt='Ghép đúng khái niệm với ý nghĩa của nó.') => ({id:id+'q5',type:'match',prompt,pairs,explanation:'Ghép đúng giúp bạn gọi tên chính xác dữ kiện khi đọc runbook/JD.',xp:10});
  const scenarioQuestion = (id, title, steps) => ({id:id+'q6',type:'scenario',prompt:title,steps,passScore:steps.length*2,explanation:'Troubleshooting tốt là thu thập tín hiệu theo thứ tự, thay vì thay đổi nhiều thứ cùng lúc.',xp:14});
  const scenarioSteps = (first,second) => [
    {prompt:'Bước 1: việc nào tạo bằng chứng nhanh và ít rủi ro nhất?',options:[{label:first,points:2},{label:'Restart ngay để thử may mắn',points:-2}]},
    {prompt:'Bước 2: sau khi có dữ kiện, hành động nào có kiểm soát?',options:[{label:second,points:2},{label:'Xóa log và cấu hình hiện tại',points:-2}]}
  ];
  const awsDiagram = id => ({kind:'awsDiagram',title:'VPC builder: public/private có chủ đích',nodes:['IGW','Public subnet','Route 0.0.0.0/0 → IGW','NAT Gateway','Private subnet','Security Group'],slots:['Internet edge','Public layer','Private layer','Security boundary'],expected:{'IGW':'Internet edge','Public subnet':'Public layer','Route 0.0.0.0/0 → IGW':'Public layer','NAT Gateway':'Public layer','Private subnet':'Private layer','Security Group':'Security boundary'},rules:['Public subnet cần route 0.0.0.0/0 qua IGW.','Private workload chỉ ra Internet qua NAT Gateway ở public subnet.','Security Group là stateful firewall ở lớp instance/ENI.'],lessonId:id});
  const terraformLab = (id,detail) => ({kind:'terraformCli',title:'Terraform plan trước apply',starter:'# Viết hoặc sửa HCL ở đây\n'+detail[3],expectedPlan:{add:Number(detail[1]),change:0,destroy:0,requires:['resource']},lessonId:id});
  const kubectlLab = (id,detail) => ({kind:'kubectlCli',title:'Điều tra Pod trước khi sửa',fault:detail[1],expectCommand:detail[3],fixOptions:['Sửa image hoặc cấu hình rồi apply lại Deployment','Xóa toàn bộ namespace ngay','Tắt readiness probe để Pod xanh giả'],correctFix:0,lessonId:id});
  const promLab = (id,detail) => ({kind:'promqlConsole',title:'PromQL trên metric mẫu',expectedQuery:detail[3],lessonId:id});
  const examLab = (id,tracker=false) => ({kind:'examMode',title:'SAA-C03 mock + job readiness',questionCount:65,durationMinutes:90,tracker,lessonId:id});

  D.phases.forEach(phase => {
    phase.weekRange=phaseInfo[phase.id].weeks;
    phase.lessons.forEach((lesson,index) => {
      const d=lessonDetail[lesson.id]; lesson.week=d[0]; lesson.whyImportant=phaseInfo[phase.id].why;
      let extras=[];
      if(phase.id==='p1'){
        const phase1Tasks = {
          p1l1:[
            {instruction:'Kiểm tra service nginx đang chạy hay không',expect:'systemctl status nginx'},
            {instruction:'Xem process nginx trên máy',expect:'ps aux'},
            {instruction:'Xem 20 dòng log gần nhất của nginx',expect:'journalctl -u nginx -n 20'},
            {instruction:'Kiểm tra port đang lắng nghe',expect:'ss -tulnp'},
            {instruction:'Kiểm tra dung lượng filesystem',expect:'df -h'}
          ],
          p1l2:[
            {instruction:'Kiểm tra DNS record của example.com',expect:'nslookup example.com'},
            {instruction:'Kiểm tra HTTP header của web service',expect:'curl -I http://localhost'},
            {instruction:'Kiểm tra route đi ra default gateway',expect:'ip route'},
            {instruction:'Liệt kê port đang lắng nghe và process sở hữu',expect:'ss -tulnp'}
          ],
          p1l3:[
            {instruction:'Kiểm tra trạng thái working tree',expect:'git status'},
            {instruction:'Tạo branch fix runbook',expect:'git checkout -b fix-runbook'},
            {instruction:'Stage thay đổi README',expect:'git add README.md'},
            {instruction:'Commit thay đổi nhỏ có mô tả',expect:'git commit -m "docs: update runbook"'}
          ],
          p1l4:[
            {instruction:'Liệt kê container đang chạy',expect:'docker ps'},
            {instruction:'Đọc 20 dòng log container web',expect:'docker logs web --tail 20'},
            {instruction:'Kiểm tra compose services',expect:'docker compose ps'},
            {instruction:'Restart service web qua compose',expect:'docker compose restart web'}
          ]
        };
        extras=[terminalQuestion(lesson.id,d[1],d[2]),matchQuestion(lesson.id,[['inode','metadata của file, không phải tên file'],['soft link','trỏ tới path, có thể dangling'],['hard link','trỏ cùng inode']]),scenarioQuestion(lesson.id,'Server báo chậm, hãy chọn thứ tự điều tra.',scenarioSteps('uptime hoặc top để kiểm tra tải','đọc log/process rồi ghi nhận fix'))];
        lesson.labSim={kind:'terminal',title:'Shell lab: điều tra an toàn',tasks:phase1Tasks[lesson.id],lessonId:lesson.id};
      } else if(phase.id==='p2') {
        extras=[{id:lesson.id+'q4',type:'calc',prompt:d[3],answer:Number(d[1])===16?4094:Number(d[1])===24?254:Number(d[1])===27?30:62,tolerance:0,hint:'IPv4 usable hosts = 2^(32-prefix) - 2.',explanation:'Trừ network address và broadcast address.',xp:12},{id:lesson.id+'q5',type:'diagram',prompt:'Nối đúng luồng private workload ra Internet.',pairs:[['Private subnet','NAT Gateway'],['NAT Gateway','Public subnet'],['Public subnet','IGW']],explanation:'NAT Gateway nằm public subnet; private subnet route ra NAT, NAT route ra IGW.',xp:12},scenarioQuestion(lesson.id,'EC2 không ra Internet: chọn trình tự chẩn đoán.',scenarioSteps('Kiểm tra Security Group và NACL','Kiểm tra route table rồi IGW/NAT'))];
        lesson.labSim=awsDiagram(lesson.id);
      } else if(phase.id==='p3') {
        extras=[{id:lesson.id+'q4',type:'codefix',prompt:'Tìm dòng pipeline gây deploy trước test và gõ sửa ngắn.',lines:['1 jobs:','2   deploy:','3     steps:','4       - run: ./deploy.sh','5   test:','6     steps:','7       - run: npm test'],badLine:4,answer:'needs: test',acceptableAnswers:['needs: test','deploy needs test'],explanation:'Deploy cần phụ thuộc job test để lỗi không đi vào môi trường.',xp:12},matchQuestion(lesson.id,[['terraform plan','xem thay đổi dự kiến'],['terraform apply','thực thi thay đổi đã review'],['remote state','nguồn sự thật dùng chung cho team']]),scenarioQuestion(lesson.id,'Pipeline release an toàn.',scenarioSteps('Chạy lint/test/scan trước deploy','review plan và lưu rollback note'))];
        lesson.labSim=terraformLab(lesson.id,d);
      } else if(phase.id==='p4') {
        extras=[terminalQuestion(lesson.id,d[3],d[2]),matchQuestion(lesson.id,[['Deployment','quản lý ReplicaSet và rollout'],['Service','định tuyến ổn định đến Pod'],['Ingress','định tuyến HTTP(S) vào Service']]),{id:lesson.id+'q6',type:'diagram',prompt:'Nối đúng chuỗi workload Kubernetes.',pairs:[['Deployment','ReplicaSet'],['ReplicaSet','Pod'],['Ingress','Service'],['Service','Pod']],explanation:'Deployment điều khiển ReplicaSet/Pod; Ingress chuyển HTTP đến Service rồi Pod.',xp:14}];
        lesson.labSim=kubectlLab(lesson.id,d);
      } else if(phase.id==='p5') {
        extras=[{id:lesson.id+'q4',type:'calc',prompt:'SLO 99.9% trong 30 ngày cho phép downtime tối đa bao nhiêu phút?',answer:43.2,tolerance:1,hint:'30×24×60×(1-0.999).',explanation:'Error budget biến mức độ tin cậy thành giới hạn hành động rõ ràng.',xp:12},matchQuestion(lesson.id,[['SLI','đại lượng đo được, ví dụ availability'],['SLO','mục tiêu cho SLI'],['RTO','thời gian tối đa để khôi phục'],['RPO','mức dữ liệu có thể mất']]),scenarioQuestion(lesson.id,'Phản ứng với cảnh báo 5xx.',scenarioSteps('Xác nhận impact bằng metric/log','ghi timeline, root cause và action item'))];
        lesson.labSim=promLab(lesson.id,d);
      } else {
        extras=[matchQuestion(lesson.id,[['Situation','bối cảnh và phạm vi sự cố'],['Task','trách nhiệm cụ thể của bạn'],['Action','các bước điều tra/fix'],['Result','kết quả đo được và prevention']],'Ghép cấu trúc STAR với mục tiêu trả lời phỏng vấn.'),scenarioQuestion(lesson.id,'Chọn bằng chứng ứng tuyển đáng tin.',scenarioSteps('Ưu tiên repo có runbook, diagram và lệnh tái tạo','tùy chỉnh CV theo JD và follow-up có ngày')),{id:lesson.id+'q6',type:'codefix',prompt:'Chọn dòng vi phạm secret hygiene và gõ sửa an toàn.',lines:['1 AWS_ACCESS_KEY_ID: AKIA...','2 uses: aws-actions/configure-aws-credentials@v4','3 role-to-assume: ${{ secrets.AWS_ROLE_ARN }}'],badLine:1,answer:'dùng GitHub Secrets hoặc OIDC role',acceptableAnswers:['dùng github secrets hoặc oidc role','dùng oidc role','dùng github secrets'],explanation:'Không commit key vào Git; ưu tiên OIDC role ngắn hạn hoặc secret manager.',xp:12}];
        lesson.labSim=examLab(lesson.id,lesson.id==='p6l4');
      }
      lesson.questions.push(...extras);
    });
  });

  const importedInterview = [
    'Khi server load cao, debug thế nào?','Hard link và soft link khác nhau thế nào?','systemd và SysV init khác gì?','Inode là gì, vì sao df còn trống nhưng không ghi được?','Xem process đang dùng port nào?','COPY và ADD trong Dockerfile khác nhau thế nào?','Docker bridge, host, overlay khác gì?','Giảm image size bằng cách nào?','Docker Compose khác Docker Swarm khi nào?','Container OOMKilled: debug thế nào?','Giải thích VPC architecture của Project 1.','NAT Gateway và NAT Instance khác gì?','ALB và NLB dùng khi nào?','S3 storage classes phù hợp use case nào?','IAM Role và IAM User: best practice?','Thiết kế HA cho web app thế nào?','Security Group và NACL khác nhau thế nào?','EC2 không ra Internet: debug ra sao?','terraform plan/apply/destroy khác nhau thế nào?','Xử lý state conflict ra sao?','Terraform module là gì và tại sao dùng?','S3 backend và DynamoDB lock hoạt động thế nào?','terraform import dùng khi nào?','Workspace hay separate state files?','Pod, Deployment, StatefulSet: dùng khi nào?','CrashLoopBackOff: debug thế nào?','HPA hoạt động thế nào?','ClusterIP, NodePort, LoadBalancer, Ingress khác nhau thế nào?','Role, ClusterRole, RoleBinding khác nhau thế nào?','Helm chart là gì?','ArgoCD/GitOps hoạt động thế nào?','Pod Pending: debug node resource và taint thế nào?','Giải thích pipeline CI/CD Project 2.','Zero-downtime deployment có các cách nào?','Blue-green và Canary khác gì?','Secret trong Git xử lý thế nào?','SLI, SLO, SLA, Error Budget là gì?','Khi nào dùng ECS Fargate thay EKS?','Tối ưu chi phí AWS trong project ra sao?','Kể sự cố production nghiêm trọng nhất từng debug.','Bạn học công nghệ mới thế nào?','Vì sao chuyển sang Cloud/DevOps?','Khi team không đồng ý giải pháp thì sao?','Runbook tốt có các phần nào?','Bạn chứng minh rollback đã được nghĩ đến thế nào?','Làm sao xác minh backup có thể restore?','Một alert tốt khác gì một alert gây noise?','Khi nào dùng IAM least privilege?','Cách trình bày trade-off của kiến trúc?','Bạn sẽ cải tiến portfolio tuần này ra sao?'
  ];
  D.interviewCards=importedInterview.map((front,i)=>({id:'interview-'+(i+1),box:1,front,back:'Trả lời theo: bối cảnh → dữ kiện/lệnh điều tra → quyết định và trade-off → kết quả/prevention. Liên hệ một lab hoặc repo thật của bạn.'}));
  const saaTopics=['S3 versioning chống xóa nhầm','S3 lifecycle sang Glacier','EBS snapshot backup','EFS shared POSIX storage','Multi-AZ RDS failover','Read replica scale read','DynamoDB on-demand workload','ElastiCache giảm database read','ALB layer 7 routing','NLB static IP/TCP','Auto Scaling theo metric','CloudFront cache static content','Route 53 failover routing','VPC public/private subnet','NAT Gateway outbound private','VPC endpoint cho S3 private','Security Group stateful','NACL stateless','IAM role cho EC2','KMS encrypt at rest','Secrets Manager rotation','CloudTrail audit API','Config compliance','WAF chặn web attack','Shield chống DDoS','SQS decouple workload','SNS fan-out notifications','EventBridge event routing','Lambda serverless execution','Step Functions orchestration','API Gateway public API','ECS Fargate containers','EKS Kubernetes control','CloudWatch metrics/alarm','CloudWatch Logs retention','X-Ray tracing','AWS Backup policy','Pilot light DR','Warm standby DR','Multi-region active-active','Cost Explorer analyze spend','Budgets alert','Savings Plans compute','Spot Instance fault tolerant','Tagging allocation','Well-Architected reliability','Well-Architected security','Well-Architected cost','Least privilege policy','S3 block public access','RDS encrypted backup','Aurora multi-AZ','Global Accelerator traffic','Direct Connect hybrid','Site-to-Site VPN hybrid','FSx managed file system','AWS Organizations SCP','Control Tower guardrails','Macie discover sensitive S3','GuardDuty threat detection','Inspector vulnerability scan','CloudFormation drift detection','Terraform remote state principle','Blue/green deployment','Canary deployment'];
  D.saaExamPool=saaTopics.map((topic,i)=>({id:'saa-'+(i+1),prompt:`SAA-C03 #${i+1}: Tình huống yêu cầu ${topic}. Phương án nào phù hợp nhất?`,options:[`Chọn managed service/phương án AWS phù hợp cho ${topic}`,`Dùng root account và cấu hình thủ công không có audit`, 'Tắt logging để giảm chi phí', 'Đưa secret vào source code để triển khai nhanh'],answer:`Chọn managed service/phương án AWS phù hợp cho ${topic}`,explanation:`Ưu tiên managed service, nguyên tắc least privilege, observability và trade-off về resilience/cost cho ${topic}.`}));
  window.CLOUD_APP_DATA=D;
})();
