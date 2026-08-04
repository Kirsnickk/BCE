# Kế hoạch học Cloud Engineering 3 giờ mỗi ngày — 26 tuần

> Bổ sung cho roadmap 6 tháng và CloudOps Duo v2. Đây là lịch thực thi: mỗi ngày có 180 phút cố định, một lab, một lần tự làm lại, và bằng chứng có thể đưa vào portfolio.

## Mục tiêu và nguyên tắc

- Mục tiêu: chuyển từ IT Operations sang Junior DevOps / Cloud Operations / Infrastructure & DevOps / Junior Cloud Engineer bằng **năng lực vận hành chứng minh được**, không chỉ hoàn thành video hoặc quiz.
- Mỗi ngày tạo ít nhất một artifact: script, manifest, diagram, runbook, test result, incident note hoặc commit.
- Học theo vòng lặp: **hiểu yêu cầu → làm lab → tự tái tạo → verify → viết evidence → review**.
- Không chuyển bài nếu chưa đạt tiêu chí “Done” trong bảng. Nếu bị kẹt, ghi lỗi, giả thuyết, lệnh đã chạy và next step — đó cũng là evidence vận hành.
- Nội dung khớp với `cloud_engineer_6month_roadmap.md` và các lesson/lab trong `cloud-duolingo-app/`; app dùng để quiz/mô phỏng, file này dẫn việc thực hành thật.

## Nhịp bắt buộc cho một buổi 3 giờ

| Khung giờ | Thời lượng | Việc phải làm | Kết quả tối thiểu |
|---|---:|---|---|
| 00:00–00:15 | 15 phút | Active recall: đọc mục tiêu hôm qua, kiểm tra môi trường, nêu 3 ý/lệnh không nhìn note | Xác định một mục tiêu và một tiêu chí Done |
| 00:15–01:00 | 45 phút | Học lõi: docs/video đáng tin cậy, ghi note bằng ngôn ngữ của mình | 5–10 bullet + câu “khi nào dùng / rủi ro gì” |
| 01:00–02:20 | 80 phút | Guided lab: làm theo nhiệm vụ cụ thể trong bảng | Command, config hoặc app chạy được; có kiểm tra output |
| 02:20–02:45 | 25 phút | Tự làm lại từ memory hoặc inject một lỗi nhỏ rồi debug | Không copy-paste toàn bộ; ghi nguyên nhân/fix |
| 02:45–03:00 | 15 phút | Evidence: README/runbook/screenshot an toàn + Git status/commit | Artifact lưu đúng thư mục; checklist Done được tick |

## Cấu trúc evidence trong project này

Tạo dần theo ngày (không cần tạo 182 folder trống ngay từ đầu):

```text
Task/
├── KE_HOACH_HOC_3_GIO_MOI_NGAY.md     # file này
├── TEMPLATE_NHAT_KY_3_GIO.md          # copy cho mỗi buổi
└── evidence/
    └── week-XX/
        └── day-XX/
            ├── README.md
            ├── commands.md | script | manifest | diagram
            ├── screenshots/             # đã che IP, account ID, token
            └── retro.md
```

Các project lớn vẫn nằm ở repo riêng như roadmap đã quy định: `cloud-job-task-labs`, `aws-docker-webapp-deployment`, `terraform-aws-cloud-infra`, `kubernetes-eks-production-deploy`. Trong `Task/evidence`, chỉ lưu **chỉ mục/link/ghi chú học**, tránh copy source code trùng lặp.

## Definition of Done mỗi ngày

- [ ] Hoàn thành đủ 180 phút hoặc ghi rõ phần bị chặn và nguyên nhân thật.
- [ ] Có lệnh/test/output xác minh, không chỉ ảnh giao diện.
- [ ] Tự làm lại hoặc inject ít nhất một lỗi và mô tả cách debug.
- [ ] Cập nhật README/runbook bằng tiếng Việt có dấu; secret, IP, account ID và dữ liệu cá nhân đã được che.
- [ ] `git status` sạch sau commit hoặc có lý do rõ ràng cho file chưa commit.
- [ ] Với AWS: kiểm tra Budget, tag và teardown; không để resource tính phí ngoài thời gian học.

## Cách dùng cùng CloudOps Duo v2

1. Mở CloudOps Duo cho lesson tương ứng (6 phase/24 lesson) để làm quiz và lab mô phỏng trước.
2. Mở tuần/ngày tương ứng bên dưới, hoàn thành lab thật trong WSL/Docker/AWS account lab.
3. Tick “Tôi đã tự làm lại trên máy/cloud thật” trong app sau khi đã có evidence, không tick chỉ vì đọc qua.
4. Cuối tuần: làm `week-XX-retro.md`, commit/push và cập nhật backlog tuần sau.

## Phase 1 — Nền tảng vận hành (Tuần 1–4)
### Tuần 01 — Linux filesystem, quyền và service
**Mục tiêu tuần:** Biến kinh nghiệm IT Ops thành thao tác Linux, mạng, Git và Docker có thể tái tạo, giải thích và chứng minh.

**Guardrail:** Không chạy lệnh xóa dữ liệu hoặc kill process ngoài môi trường lab. Mọi thao tác có thay đổi phải có ghi chú rollback.

**Deliverable cuối tuần:** `linux-admin-labs/week1/` có command cheat sheet, `log-analysis.sh`, runbook kiểm tra service và một commit sạch.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 1 | Filesystem hierarchy, đường dẫn tuyệt đối/tương đối, `pwd`, `ls`, `cd`, `mkdir`, `cp`, `mv`. | Tạo sandbox `~/cloud-labs/week01`; thực hiện 25 lệnh điều hướng và thao tác file, rồi dùng `find` kiểm tra cấu trúc. | Không nhìn tài liệu, tái tạo cấu trúc `app/logs/config/backups`; giải thích khi dùng đường dẫn tuyệt đối. | Lưu `commands-day01.md`; chụp terminal; commit `docs: add linux filesystem lab`. |
| Ngày 2 | Users, groups, `sudo`, permission rwx, `chmod`, `chown`, umask và nguyên tắc least privilege. | Tạo user/group lab; tạo file owner-only, group-readable và public-read; xác minh bằng `ls -l` và thử truy cập từ user khác. | Thiết kế quyền cho `/srv/webapp` gồm deployer, nginx và auditor; ghi rõ vì sao chọn 750/640. | Lưu `permissions-runbook.md` cùng output `id`, `groups`, `ls -l`. |
| Ngày 3 | Text pipeline: `grep`, `cut`, `sort`, `uniq`, `awk`, `tail`, redirect và exit code. | Dùng access log mẫu: lọc 404/500, đếm top IP, top URL và export một báo cáo text. | Viết `log-analysis.sh` nhận đường dẫn log; thêm `set -euo pipefail` và test input không tồn tại. | Lưu script, sample output và 3 phát hiện từ log; commit. |
| Ngày 4 | Process, PID/PPID, foreground/background, signal, `ps`, `top`, `pgrep`, `kill`, `nice`. | Chạy process lab; quan sát CPU/memory; gửi SIGTERM rồi kiểm tra process đã dừng trước khi thử SIGKILL. | Giải case “web chậm”: viết thứ tự lệnh thu thập bằng chứng trước khi restart process. | Lưu `process-triage.md` có PID, dấu hiệu và rollback note. |
| Ngày 5 | systemd unit: service, daemon-reload, enable, status, journal và nguyên tắc không chạy app bằng root. | Tạo app HTTP Python tối thiểu và unit file; nếu WSL chưa bật systemd, dùng unit mẫu + Docker để mô phỏng lifecycle. | Cố ý sửa `ExecStart` sai; dùng `systemctl status` và `journalctl -u` để tìm, sửa và xác minh. | Lưu unit file, `service-runbook.md`, ảnh/status trước-sau. |
| Ngày 6 | APT, repository, package lifecycle, port listening và health check HTTP. | Cài hoặc kiểm tra Nginx trong lab; dùng `ss -tulnp`, `curl -I`, `systemctl status` để xác minh port 80. | Đổi trang index và tạo endpoint/response nhận diện môi trường; kiểm tra từ terminal mới. | Lưu `nginx-install-runbook.md`, lệnh rollback/gỡ package và screenshot. |
| Ngày 7 | Ôn tuần: filesystem → quyền → log → process → service. Phân biệt quan sát với hành động sửa. | Làm scenario 45 phút: service Nginx không trả 200; điều tra bằng status, journal, port, curl và permission. | Viết runbook 1 trang từ memory; so với ghi chú rồi bổ sung phần còn thiếu. | Tạo `week01-retro.md`: 3 điều biết, 2 lỗi gặp, 1 hành động tuần sau; commit/push. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-01-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 1 — Nền tảng vận hành (Tuần 1–4)
### Tuần 02 — Disk, Bash và networking troubleshooting
**Mục tiêu tuần:** Củng cố Linux và mạng để xử lý ticket theo dữ kiện, không đoán mò.

**Guardrail:** Chỉ quét/kiểm tra host lab được phép. Không dùng Nmap hay SSH vào tài sản không sở hữu.

**Deliverable cuối tuần:** `linux-admin-labs/week2/` có script backup an toàn, network checklist và incident report “website không truy cập được”.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 8 | Filesystem capacity: `df`, `du`, inode, mount, file mở đã xóa, log rotation và cleanup an toàn. | Tạo file lớn trong lab; đo `df -h`, `du -sh`, `df -i`; mô phỏng log directory tăng dung lượng. | Viết checklist quyết định dọn disk: đo → xác định owner → backup → xóa có kiểm soát → xác minh. | Lưu `disk-cleanup-runbook.md`; ghi rõ lệnh không được chạy bừa. |
| Ngày 9 | Bash variables, quotes, conditionals, loops, functions, `set -euo pipefail`, stderr và exit code. | Viết `backup.sh`: validate input, nén thư mục lab, timestamp, checksum và retention 3 bản sao. | Test 3 case: thành công, source thiếu, destination không ghi được; sửa message lỗi rõ ràng. | Lưu script + `test-results.md`; commit `feat: add safe backup script`. |
| Ngày 10 | TCP/IP, IP/private range, default gateway, ARP, route table, SSH key authentication, `scp`/`rsync`. | Kiểm tra `ip addr`, `ip route`, `ping`, `ssh -V`; tạo SSH key lab và chuyển file giữa hai thư mục/host được phép. | Viết runbook chuyển `backup.tar.gz` bằng `rsync -avz` và cách xác minh checksum. | Lưu `ssh-file-transfer.md` và public-key hygiene note. |
| Ngày 11 | DNS, HTTP methods/status, TLS handshake, headers và phân tầng sự cố DNS vs TCP vs HTTP. | Dùng `nslookup`/`dig`, `curl -Iv`, `openssl s_client` với domain công khai; ghi IP, status, certificate issuer/expiry. | Tạo decision tree “không mở được website”: DNS → route/port → TLS → HTTP/app. | Lưu `web-connectivity-checklist.md` cùng 1 output thật đã ẩn dữ liệu nhạy cảm. |
| Ngày 12 | Troubleshooting network: `ss`, `netstat`, `traceroute`, firewall/security boundary và cách đọc timeout/refused. | Mô phỏng app nghe sai port hoặc firewall local chặn port; dùng `ss`, `curl`, log để xác định nguyên nhân. | Viết 5 giả thuyết cho “website down” và phép kiểm chứng tối thiểu cho từng giả thuyết. | Lưu `website-down-triage.md`; không thay đổi firewall ngoài lab. |
| Ngày 13 | OSI model theo luồng request, CIDR, subnet mask, usable host, public/private subnet và route. | Tính 8 bài /24, /26, /27; thiết kế VPC `10.20.0.0/20` với public/private subnet không overlap. | Vẽ sơ đồ VPC bằng Mermaid: client → public tier → private tier → database. | Lưu `subnetting-exercises.md` và `vpc-plan.mmd`. |
| Ngày 14 | Incident lifecycle: detect, assess impact, mitigate, communicate, root cause, prevention. | Thực hiện tabletop incident 60 phút cho lỗi DNS/port/service; ghi timeline theo phút và lệnh đã chạy. | Viết postmortem không đổ lỗi: impact, root cause, contributing factors, action owner/due date. | Lưu `incident-report-template.md` đã điền; commit/push cuối tuần. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-02-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 1 — Nền tảng vận hành (Tuần 1–4)
### Tuần 03 — Git, Bash automation và Python cơ bản
**Mục tiêu tuần:** Tạo thói quen version control và tự động hóa nhỏ có kiểm thử, documentation và rollback.

**Guardrail:** Không commit key, token, file `.env` hoặc data thật. Kiểm tra `git diff --cached` trước mọi commit.

**Deliverable cuối tuần:** Có `cloud-job-task-labs/task-01-server-health/` với script health check, test cases, README và history Git rõ ràng.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 15 | Git objects ở mức đủ dùng: init, status, add, commit, log, diff, `.gitignore`, README tốt. | Khởi tạo `cloud-job-task-labs`; tạo cấu trúc task-01 đến task-17; thêm `.gitignore` cho `.env`, logs, Terraform state local. | Tự tạo một commit có scope nhỏ, kiểm tra `git show --stat` và sửa commit message nếu mơ hồ. | Lưu `git-basics.md`; commit `chore: scaffold cloud job task labs`. |
| Ngày 16 | Branch, merge, rebase khái niệm, conflict, pull request và review checklist. | Tạo branch `feat/health-check`; sửa cùng một dòng trên hai branch để tạo conflict rồi resolve có chủ đích. | Viết checklist PR: mục tiêu, test, secret scan, rollback, docs; mô phỏng review chính mình. | Lưu `pr-checklist.md`; chụp `git log --graph --oneline`. |
| Ngày 17 | Remote, tag/release, semantic commit, GitHub Actions anatomy: trigger, job, step, runner, artifact. | Tạo workflow chỉ chạy `bash -n`/Python compile khi push; dùng action checkout; kiểm tra YAML bằng đọc/syntax. | Tạo tag `v0.1.0` cho mốc tuần 2 và viết release note ngắn. | Lưu `.github/workflows/validate.yml` và `release-notes.md`. |
| Ngày 18 | Bash health check: functions, timeout, curl, disk threshold, process/service check, exit codes. | Viết `health-check.sh` kiểm tra disk, HTTP `/health`, service/port; output PASS/WARN/FAIL và mã thoát khác nhau. | Tạo fake failure bằng URL/threshold sai; test 4 case và sửa script chỉ trả PASS khi tất cả điều kiện đạt. | Lưu script, `tests.md`, README; commit feature. |
| Ngày 19 | Python: virtual environment, variables, list/dict, file I/O, JSON, exception handling, logging. | Viết `parse_health_report.py` đọc output JSON giả lập và tạo summary theo severity. | Cố ý đưa JSON lỗi/missing key; bắt lỗi, in message hữu ích và return non-zero. | Lưu script, sample input/output và error-handling note. |
| Ngày 20 | Python `requests`, `subprocess`, argparse; khi nào không parse shell output; boto3 concept không cần key thật. | Tạo Python wrapper gọi health-check và request endpoint public/mock; export report JSON có timestamp. | Thêm `--url` và `--output`; chạy `python -m py_compile` và kiểm tra output schema. | Lưu `automation-report.json`, usage examples, dependency note. |
| Ngày 21 | Ôn tuần qua một ticket end-to-end: triage → script → evidence → Git review. | Từ folder trống, dựng lại health check mini trong 90 phút; tạo issue giả, branch, PR description và merge local. | Đọc lại diff với góc nhìn reviewer: liệu người khác chạy được, hiểu failure và rollback không? | Lưu `week03-retro.md`; push repo khi remote đã được cấu hình. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-03-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 1 — Nền tảng vận hành (Tuần 1–4)
### Tuần 04 — Docker fundamentals và deploy local
**Mục tiêu tuần:** Đóng gói, chạy, debug và bảo mật cơ bản một web service bằng Docker thay vì chỉ học lệnh.

**Guardrail:** Không đưa secret vào Dockerfile/image. Luôn chạy `docker compose down` khi hết lab và kiểm tra container/volume còn lại.

**Deliverable cuối tuần:** `task-04-docker-deploy/` có app containerized, Dockerfile tốt, Compose, troubleshoot log và runbook teardown.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 22 | Container vs VM, image/container, registry, namespace/cgroup ở mức vận hành, lifecycle Docker. | Chạy `hello-world` và Nginx; quan sát image/container bằng `docker images`, `ps -a`, `inspect`. | Giải thích bằng 5 câu vì sao image immutable nhưng container writable layer không phải nơi lưu data. | Lưu `docker-concepts.md` kèm output lệnh. |
| Ngày 23 | Docker CLI: run, exec, logs, stop/rm, volume, bridge network, port mapping. | Chạy Nginx với named volume và custom network; `exec` đọc file; curl qua host port. | Xóa/recreate container và chứng minh data volume còn tồn tại; dọn container/image lab. | Lưu `docker-lifecycle-runbook.md` + teardown commands. |
| Ngày 24 | Dockerfile: FROM, WORKDIR, COPY, RUN, ENV, EXPOSE, CMD vs ENTRYPOINT. | Containerize app Python/Node hello-health; build tag riêng; chạy `/health` và xem log. | Sửa sai thứ tự COPY/CMD hoặc thiếu dependency; rebuild rồi so sánh behavior. | Lưu `Dockerfile`, `.dockerignore`, README run command. |
| Ngày 25 | Layer cache, multi-stage build, pin base image, non-root user, healthcheck và image size trade-off. | Tối ưu Dockerfile hôm qua: cache dependency, `.dockerignore`, user non-root; kiểm tra `docker history`. | So sánh image trước/sau và giải thích mỗi tối ưu có ảnh hưởng gì đến build/security. | Lưu `optimization-notes.md` và tag `v0.2.0`. |
| Ngày 26 | Docker Compose: services, environment, depends_on, networks, volumes và readiness khác startup order. | Dựng app + PostgreSQL/Redis mock bằng `docker compose`; dùng healthcheck hoặc retry để app chờ dependency. | Tắt database, đọc log app, phục hồi service; không xóa volume trước khi export/backup mẫu. | Lưu `compose.yaml`, `.env.example`, `compose-runbook.md`. |
| Ngày 27 | Container troubleshooting/security: log, inspect, exit code, resource limit, vuln scanning và secret hygiene. | Mô phỏng container crash do env thiếu; dùng `docker logs`, `inspect`, compose config để fix; chạy Trivy nếu có. | Viết checklist release container: tag, scan, non-root, healthcheck, no secret, rollback image. | Lưu `container-triage.md` và scan result/safe manual review. |
| Ngày 28 | Checkpoint tháng 1: biến Linux/Git/Docker thành một deploy reproducible. | Từ clone sạch: build, compose up, curl health, chạy health script, simulate fail rồi recover. | Viết README theo 5 phần: architecture, prerequisites, run, verify, teardown/troubleshoot. | Tag milestone `month-01`; `week04-retro.md`; commit/push. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-04-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 2 — AWS Core (Tuần 5–8)
### Tuần 05 — AWS account, IAM và VPC
**Mục tiêu tuần:** Học AWS theo guardrail chi phí, identity trước resource và mọi kiến trúc phải có sơ đồ/teardown.

**Guardrail:** Bật MFA cho root, dùng IAM Identity Center/IAM admin riêng, đặt AWS Budget, không tạo NAT Gateway/ALB/RDS kéo dài, không commit credentials.

**Deliverable cuối tuần:** Có security baseline, VPC design `10.20.0.0/20`, IAM policy lab và tài liệu cost/teardown.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 29 | AWS shared responsibility, account structure, root vs IAM role/user, MFA, billing and tagging. | Thiết lập/kiểm tra MFA root, Budget $5/$20, billing alert và tag `Project=cloud-lab`; nếu chưa có account, làm checklist/sandbox plan. | Viết `aws-account-baseline.md` nêu ai được dùng root, nơi lưu billing alert, và tiêu chí dừng lab. | Lưu screenshot/verification không lộ account ID; checklist hoàn thành. |
| Ngày 30 | IAM policy evaluation, user/group/role, managed vs inline policy, least privilege và deny. | Viết policy JSON chỉ `s3:ListBucket`/`GetObject` cho bucket lab; dùng IAM Policy Simulator hoặc đọc policy logic. | So sánh policy rộng `s3:*` với policy hẹp; ghi 3 rủi ro permission quá mức. | Lưu `iam-s3-readonly-policy.json` và rationale. |
| Ngày 31 | AWS CLI profile, region, STS identity, credential chain, role assumption và không dùng access key dài hạn. | Cấu hình profile lab an toàn nếu được phép; chạy `aws sts get-caller-identity`, `aws configure list`; nếu offline, dùng output mock đã gắn nhãn. | Viết command inventory read-only cho EC2/S3 và cách xóa/rotate credential khi nghi lộ. | Lưu `aws-cli-basics.md`; tuyệt đối không lưu secret hoặc output token. |
| Ngày 32 | VPC, CIDR, route table, public/private subnet, availability zone và network boundary. | Chia `10.20.0.0/20` thành 2 public/2 private subnet; tính CIDR, host range và tránh overlap. | Vẽ Mermaid architecture gồm IGW, NAT placeholder, app, DB; đánh dấu resource có thể phát sinh phí. | Lưu `vpc-address-plan.md` và diagram. |
| Ngày 33 | IGW, NAT Gateway trade-off, Security Group stateful, NACL stateless, route flow. | Tạo rule matrix: ALB 443 from Internet; app only from ALB; DB only from app. Không mở `0.0.0.0/0` cho SSH. | Mô phỏng một EC2 private không ra Internet: kiểm tra route, NAT, SG/NACL theo đúng thứ tự. | Lưu `network-security-matrix.md` và triage checklist. |
| Ngày 34 | Build VPC bằng Console/CLI theo checklist; tagging, idempotency concept và teardown order. | Nếu dùng AWS: tạo VPC/subnet/route/SG tối thiểu với tag; nếu không: làm dry-run CLI/diagram và peer review plan. | Ghi resource IDs hoặc placeholder; lập danh sách “created today” và lệnh/console path để xóa. | Lưu `vpc-build-runbook.md`, `teardown.md`, screenshots. |
| Ngày 35 | Review identity + network boundary qua architecture walkthrough. | Tự giải thích luồng browser → app → DB và ai có quyền gọi API AWS; rà policy/SG theo least privilege. | Thực hiện cost audit: kiểm tra NAT/Elastic IP/EC2 không cần thiết và dừng/xóa theo policy lab. | Lưu `week05-review.md`; commit/push tài liệu không nhạy cảm. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-05-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 2 — AWS Core (Tuần 5–8)
### Tuần 06 — EC2, S3 và deployment
**Mục tiêu tuần:** Deploy và vận hành một workload nhỏ trên EC2/S3, có backup, cost control và runbook thực thi được.

**Guardrail:** Chỉ mở SSH từ IP cá nhân hoặc dùng SSM. Dừng/terminate EC2 và xóa Elastic IP khi không học; encrypt S3 và block public access mặc định.

**Deliverable cuối tuần:** Có EC2 deployment runbook, S3 backup script và evidence web app từ build đến health check.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 36 | EC2 instance type, AMI, key pair, security group, user data, EBS và lifecycle stop vs terminate. | Lập launch checklist; nếu tạo EC2 free-tier: public subnet, no public SSH, tag/cost guardrail; test status check. | Viết decision note chọn instance type/AMI và rủi ro key pair bị mất. | Lưu `ec2-launch-checklist.md`; dừng instance khi hết buổi nếu không cần. |
| Ngày 37 | SSH hardening, cloud-init/user data, packages, logs, Elastic IP trade-off và Systems Manager concept. | Kết nối instance lab bằng SSH/SSM; chạy baseline `uname`, `df`, `free`, `ss`, update package; kiểm tra cloud-init log. | Viết bootstrap script idempotent cài Docker/Nginx hoặc đưa dry-run script nếu chưa có EC2. | Lưu `ec2-bootstrap.sh`, verification output, rollback. |
| Ngày 38 | Reverse proxy, Docker deploy, health endpoint, environment config và zero-secret README. | Deploy app Docker tuần 4 lên EC2; Nginx proxy `/health`; kiểm tra local + external endpoint theo SG. | Cố ý gây 502 bằng upstream sai rồi debug log Nginx/container; khôi phục version trước. | Lưu `ec2-app-deploy-runbook.md`, diagram, evidence health 200. |
| Ngày 39 | AMI, launch template, Auto Scaling overview, EBS snapshot, capacity vs cost trade-off. | Tạo/đọc launch template/AMI flow; mô phỏng scale scenario CPU cao bằng architecture and policy, không cần giữ ASG chạy. | Viết rollback decision: khi nào replace instance thay vì sửa trực tiếp. | Lưu `compute-resilience-notes.md` và teardown inventory. |
| Ngày 40 | S3 bucket/object, versioning, encryption, lifecycle, storage class, Block Public Access và IAM access. | Tạo bucket lab unique; bật versioning/encryption; upload sample backup; test list/get bằng policy tối thiểu. | Xóa/khôi phục object version mẫu và ghi rủi ro khi dùng public bucket. | Lưu `s3-runbook.md`, lifecycle rule JSON/console note. |
| Ngày 41 | Backup mindset: scope, retention, checksum, restore test, RPO/RTO sơ bộ và boto3/aws s3. | Upload app log/backup archive lên S3 bằng CLI/script; verify hash local vs restored file; set prefix theo date. | Viết restore drill từ S3 sang folder mới; xác định RPO/RTO thực tế của lab. | Lưu `s3-backup.py` hoặc script CLI, `restore-test.md`. |
| Ngày 42 | Review EC2/S3 deploy as an operations task, not a one-time demo. | Từ runbook, deploy/recover service và restore one file; kiểm tra tags/budget/resources còn chạy. | Viết incident note “app unreachable” gồm evidence, fix, prevention; dừng/xóa resource không cần. | Lưu `week06-retro.md`; commit/push. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-06-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 2 — AWS Core (Tuần 5–8)
### Tuần 07 — Route 53, CloudWatch, CloudFront và HTTPS
**Mục tiêu tuần:** Quan sát và debug request end-to-end qua DNS, CDN, logs, metric, certificate và backend.

**Guardrail:** Route 53/ACM chỉ dùng domain do bạn quản lý. Xóa CloudFront distribution/record không dùng; đặt log retention để tránh chi phí bất ngờ.

**Deliverable cuối tuần:** Có dashboard/alert design, log query, troubleshooting flow 502/504 và postmortem có hành động phòng ngừa.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 43 | DNS hosted zone, record types A/AAAA/CNAME/alias, TTL và routing policy. | Dùng domain lab hoặc `hosts`/diagram để mô phỏng record → load balancer; dùng `dig` kiểm tra record/TTL. | Viết DNS change checklist: record cũ, TTL, rollback, propagation validation. | Lưu `dns-runbook.md` và query output. |
| Ngày 44 | CloudWatch metrics, namespace/dimension, alarm, dashboard, threshold vs symptom. | Tạo/thiết kế dashboard EC2/app: CPU, network, status check, 5xx; thêm alarm CPU high theo trạng thái evaluation. | Giải thích vì sao CPU 80% không luôn là incident và metric nào xác nhận user impact. | Lưu `cloudwatch-dashboard-spec.md`, alarm rationale. |
| Ngày 45 | Logs: structured fields, retention, CloudWatch Agent concept, Logs Insights query. | Ship/read app or Nginx log sample; viết 3 query: lỗi 5xx, top path, time range incident. | Tạo log event mẫu có request ID/status/latency và nêu field nào còn thiếu cho triage. | Lưu `logs-insights-queries.md` và sample output. |
| Ngày 46 | CloudFront cache behavior, origin, invalidation, cache-control, static vs dynamic content. | Deploy static page S3/localhost design; lập distribution config dry-run và test cache header bằng `curl -I` nếu có endpoint. | Chọn 3 asset nên cache dài và 2 endpoint không được cache; giải thích invalidation cost/impact. | Lưu `cdn-caching-decision.md`. |
| Ngày 47 | TLS/HTTPS, ACM, certificate validation, ALB/CloudFront termination, HSTS basic. | Kiểm tra certificate website bằng `curl -Iv`/browser; phân tích issuer, expiry, hostname; mô phỏng ACM attach flow. | Viết cert renewal/expiry alert checklist; không tạo cert cho domain không sở hữu. | Lưu `https-certificate-check.md`. |
| Ngày 48 | Triaging 502/504: DNS → CDN/ALB → target health → SG → Nginx → app → DB. | Thực hành failure injection local/EC2: bad upstream, stopped app, wrong port; ghi triệu chứng/log/metric/fix từng case. | Chọn case khó nhất và viết decision tree 1 trang có lệnh/read-only checks đầu tiên. | Lưu `502-504-troubleshooting.md`. |
| Ngày 49 | Postmortem, alert quality và feedback loop vận hành. | Dùng một case ngày 48 tạo postmortem: timeline, impact, detection gap, root cause, corrective/preventive action. | Rà alarm: alert có actionable, owner, runbook link và tránh noise không? | Lưu `incident-postmortem-01.md`; commit/push. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-07-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 2 — AWS Core (Tuần 5–8)
### Tuần 08 — RDS, ECS/ECR và Project 1
**Mục tiêu tuần:** Khép phase AWS bằng Project 1 có kiến trúc, triển khai, observability, CI/CD draft và teardown rõ ràng.

**Guardrail:** RDS/ECS/Fargate/ALB có thể tốn phí. Ưu tiên local/mock nếu budget chưa cho phép; mọi resource AWS thật cần tag, budget và teardown ngay sau demo.

**Deliverable cuối tuần:** Repo `aws-docker-webapp-deployment` có deploy design/app local-or-AWS, diagram, runbook, cost sheet và demo evidence.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 50 | RDS: instance, subnet group, Multi-AZ vs read replica, backup/snapshot, security group và connection string. | Chạy PostgreSQL local Compose hoặc RDS lab có kiểm soát; tạo schema nhỏ, backup/export, restore sang DB mới. | Viết DB access matrix và RPO/RTO lab; không public database. | Lưu `rds-design-and-restore.md`. |
| Ngày 51 | ECS concepts: cluster, task definition, task/service, Fargate, desired count, target group and task role. | Chuyển Docker app thành ECS task definition draft hoặc deploy Fargate time-boxed; validate image/env/port/log config. | So sánh ECS Fargate với EC2 Docker theo operational burden/cost cho Project 1. | Lưu `ecs-deployment-plan.md` và task definition sanitized. |
| Ngày 52 | ECR registry, image tag strategy, immutable tags, vulnerability scan, CI trigger. | Tạo/thiết kế ECR repo; build tag `git-sha` and `v1`; push only if credentials/budget approved; inspect image metadata. | Viết rollback rule: tag nào được deploy, tag nào bị cấm, làm sao truy vết code. | Lưu `ecr-image-policy.md`. |
| Ngày 53 | Lambda/API Gateway overview, event-driven vs container use case, timeout/retry/observability. | Tạo Lambda Hello World local/mock or AWS; log one invocation; viết API contract cho health/report endpoint. | Chọn ECS hay Lambda cho 3 scenario và giải thích trade-off. | Lưu `compute-selection.md`. |
| Ngày 54 | Project 1 planning: requirements, threat/cost constraints, components, failure modes, acceptance criteria. | Tạo repo `aws-docker-webapp-deployment`; vẽ architecture FastAPI/Node → ECR/ECS or EC2 → ALB/Nginx → RDS → CloudWatch. | Chia backlog 5 issue: app, container, infra, pipeline, docs; chọn MVP deploy path. | Lưu `PROJECT_1_DESIGN.md` và issue list. |
| Ngày 55 | Project 1 build/deploy day: image, config, DB, health, logs and rollback. | Triển khai MVP local then AWS nếu guardrail pass; test happy path + one failure; save logs/screenshots. | Thực hiện teardown dry-run và kiểm tra secrets không có trong Git history. | Lưu `DEPLOYMENT_RUNBOOK.md`, `TEARDOWN.md`, evidence. |
| Ngày 56 | Project 1 review: architecture walkthrough, cost review, demo narrative và interview story. | Demo 5 phút: request flow, deploy, metric/log, failure/fix, cost control; ask yourself 5 interview questions. | Dọn resource AWS; hoàn tất README and diagram; create release/tag. | Lưu `project-1-retro.md`; commit/push milestone tháng 2. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-08-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 3 — IaC & CI/CD (Tuần 9–12)
### Tuần 09 — Terraform foundations
**Mục tiêu tuần:** Chuyển infrastructure từ thao tác tay sang code có plan, review, state discipline và destroy an toàn.

**Guardrail:** Không commit `terraform.tfstate`, `.tfvars` chứa secrets hay AWS credentials. Luôn `terraform plan` và kiểm tra target/account trước apply/destroy.

**Deliverable cuối tuần:** Có module Terraform nhỏ, plan evidence, state troubleshooting note và lab infra có thể destroy/recreate.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 57 | Terraform workflow: provider, resource, data, state, init/validate/plan/apply/destroy. | Tạo repo `terraform-aws-cloud-infra`; chạy `fmt`, `validate`, plan với local/null resource hoặc S3 lab approved. | Giải thích state lưu gì và vì sao không manually edit state. | Lưu `main.tf`, plan sanitized, `terraform-basics.md`. |
| Ngày 58 | Variables, locals, outputs, types, validation, naming/tag conventions. | Parameterize region, project, environment; output resource ID; test dev/prod tfvars sample không secret. | Thêm validation CIDR/environment; làm plan với 2 input khác nhau. | Lưu `variables.tf`, `outputs.tf`, `terraform.tfvars.example`. |
| Ngày 59 | Module design, input/output contract, versioning, remote state S3/DynamoDB concept. | Tách network/module nhỏ; consume from root; document module interface and expected tags. | Vẽ state flow team collaboration; nêu lock failure và safe recovery process. | Lưu `modules/`, `state-strategy.md`. |
| Ngày 60 | Provision VPC/EC2/SG in code: dependency graph, `for_each`, tags, idempotency. | Viết plan VPC + SG + EC2 smallest approved; inspect plan line-by-line before apply; use `-out` concept. | Giả lập reviewer tìm public SSH/overbroad SG; sửa code và re-plan. | Lưu `reviewed-plan.md` và security diff. |
| Ngày 61 | Drift, refresh/plan, import, lifecycle, state mv/rm concept và recovery boundaries. | Mô phỏng drift bằng changing tag via console only if lab allowed; run plan to detect then reconcile in code. | Viết runbook state conflict: stop concurrent applies, backup state, lock check, review before forced action. | Lưu `terraform-state-troubleshooting.md`. |
| Ngày 62 | Terraform ECS pattern: data sources, IAM role, task definition, service dependencies and sensitive variables. | Mô hình hóa ECS components as code/dry-run; inspect dependency ordering; do not apply costly stack without approval/budget. | Viết 3 acceptance tests for infra: tags, no public DB, least-privilege ingress. | Lưu `ecs-iac-design.md` and checks. |
| Ngày 63 | Week review: reproducibility is the test of IaC. | From clean working directory run init → fmt → validate → plan; independently explain each resource and destroy order. | Create a broken HCL branch, diagnose and repair; peer-review own README. | Lưu `week09-retro.md`; commit/push. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-09-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 3 — IaC & CI/CD (Tuần 9–12)
### Tuần 10 — GitHub Actions CI/CD
**Mục tiêu tuần:** Thiết kế pipeline bảo vệ chất lượng trước deploy, dùng secret/OIDC đúng và có rollback evidence.

**Guardrail:** Không đưa AWS access key vào GitHub Actions. Ưu tiên OIDC role short-lived; protect environment và không auto-apply production từ branch tùy ý.

**Deliverable cuối tuần:** Có CI workflow test/build/scan và Terraform pipeline plan-on-PR với policy rõ ràng cho apply.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 64 | Workflow YAML, events, jobs, steps, matrix, runner, cache, artifact và permissions. | Tạo workflow CI chạy lint/test/compile app khi push/PR; inspect logs của 1 run thành công. | Cố ý làm test fail rồi đọc log từ lỗi đầu tiên; sửa không bỏ qua test. | Lưu `.github/workflows/ci.yml` và `ci-debug-notes.md`. |
| Ngày 65 | Secrets, variables, environments, OIDC, least privilege GitHub token và masking limits. | Thiết kế secret inventory cho repo; cấu hình placeholder/Environment protection; draft AWS OIDC trust policy không có ID nhạy cảm. | Review workflow tìm `echo $SECRET`, hardcoded key, permissions rộng và sửa. | Lưu `cicd-security-baseline.md`. |
| Ngày 66 | Container CI: build, unit test, Dockerfile lint/scan, tag strategy and artifacts. | Pipeline build image from Docker project, run health test container, upload test/artifact; scan if tool available. | Add failure gate: image không deploy nếu health/scan critical fail. | Lưu `container-ci.yml`, test log, pass/fail policy. |
| Ngày 67 | CD concepts: immutable artifact, deploy stage, approval, smoke test, rollback. | Mô phỏng pipeline deploy staging: build → test → approve → deploy → curl `/health` → rollback tag. | Viết rollback runbook with objective proof of recovery and owner. | Lưu `deployment-pipeline.md` và smoke-test script. |
| Ngày 68 | Terraform in CI: fmt/validate, plan artifact on PR, policy/review, apply only controlled merge. | Tạo Terraform workflow dry-run; save plan text artifact; run against local/mock unless AWS guardrail allows. | Review plan for destructive changes; explain why `terraform apply -auto-approve` is risky. | Lưu `terraform-plan.yml`, review checklist. |
| Ngày 69 | CI/CD failure modes: YAML, permissions, missing secret, cache, test flake, artifact/tag mismatch. | Tạo 5 broken workflow scenarios (branch/commit) and repair each by evidence from log. | Viết “first 10 minutes” playbook when pipeline fails. | Lưu `github-actions-troubleshooting.md`. |
| Ngày 70 | Pipeline checkpoint: explain every trigger and security boundary. | Run full CI locally/remote; simulate failed test then successful green deployment dry-run; inspect Git history and artifact link. | Update README badge/instructions without claiming deploy not actually run. | Lưu `week10-retro.md`; commit/push. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-10-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 3 — IaC & CI/CD (Tuần 9–12)
### Tuần 11 — Nginx và Ansible
**Mục tiêu tuần:** Vận hành web deployment có Nginx và Ansible: idempotent, observable, rollbackable.

**Guardrail:** Ansible inventory không chứa password/key. Limit host rõ ràng, dùng `--check` khi có thể và không chạy playbook lên production chưa được review.

**Deliverable cuối tuần:** Có Nginx reverse proxy runbook, 502/504 lab evidence và Ansible playbook idempotent cài/deploy app.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 71 | Nginx config context, server/location, reverse proxy headers, upstream, access/error logs. | Cấu hình Nginx proxy app Docker/local; test `/health`, headers and status; inspect both Nginx/app logs. | Vẽ request path client → Nginx → app and identify timeout owner. | Lưu `nginx.conf` sanitized, `reverse-proxy-runbook.md`. |
| Ngày 72 | TLS termination, HTTP redirect, security headers, timeouts and config validation. | Dùng self-signed/local or existing cert; test `nginx -t`, redirect and header; never use fake production certificate. | Set/justify proxy timeout for one API scenario and document rollback. | Lưu `nginx-https-hardening.md`. |
| Ngày 73 | Debug 502/504: DNS/port/upstream/socket/permission/timeout; evidence ordering. | Inject 5 errors: stopped app, wrong port, bad upstream, slow response, bad permission; investigate each with log/command. | Create decision tree mapping symptom → first check → evidence → safe fix. | Lưu `nginx-502-504-lab.md`. |
| Ngày 74 | Ansible inventory, play, task, module, variable, handler, facts and idempotency. | Create localhost/lab inventory and playbook install Nginx/configure index; run twice, compare changed count. | Use `ansible-lint` if available or manually inspect names/changed_when; add `--check` behavior note. | Lưu `site.yml`, inventory example, `ansible-basics.md`. |
| Ngày 75 | Templates, variables by environment, handlers, notify and secret strategy. | Make Jinja2 Nginx template for dev/staging; change one variable then validate handler reload occurs only on config change. | Write variable precedence and secret handling policy; use placeholders only. | Lưu `templates/`, `group_vars/`, `configuration-management.md`. |
| Ngày 76 | Automated deploy: backup current config, deploy image/config, verify health, rollback on failure. | Write playbook workflow with precheck, deploy, validation and rollback block/rescue for local/lab host. | Simulate failed health validation; prove rollback restores previous response. | Lưu `deploy.yml`, `rollback-runbook.md`, test evidence. |
| Ngày 77 | Project 2 planning: combine Terraform + CI + Nginx/Ansible as production-like IaC story. | Create Project 2 backlog/architecture; trace each component to test, deploy, observability and teardown. | Review for manual steps still undocumented; turn the highest-risk one into a runbook task. | Lưu `project-2-plan.md`; commit/push. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-11-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 3 — IaC & CI/CD (Tuần 9–12)
### Tuần 12 — Project 2: Terraform AWS Infrastructure
**Mục tiêu tuần:** Hoàn thiện portfolio Project 2 với hạ tầng tái tạo, CI review gates và tài liệu đủ để người khác chạy lại.

**Guardrail:** Chỉ apply infrastructure trong account lab đúng region. Confirm `terraform destroy` scope; không xóa remote state/bucket trước khi teardown có chủ đích.

**Deliverable cuối tuần:** Repo `terraform-aws-cloud-infra` có modules, plan CI, diagram, variables docs, cost/teardown guide và release demo.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 78 | Project structure and module contract: VPC, security, compute, data; separation of concerns. | Scaffold `modules/vpc`, `security`, `compute`, optional `rds`; define README and provider/tag conventions. | Run fmt/validate from root and module directories; fix path/version inconsistencies. | Lưu initial project skeleton and `ARCHITECTURE.md`. |
| Ngày 79 | VPC module implementation: AZ/subnet/route/IGW/NAT cost decision and outputs. | Implement/complete VPC module in dry-run; output VPC/subnet IDs; test different CIDR via tfvars example. | Review routes/SG matrix against Week 5 design; document NAT optionality/cost. | Lưu plan evidence and module usage example. |
| Ngày 80 | Compute/data module and dependency: EC2 launch template, SG, RDS private placement, encryption/backup decisions. | Implement only approved resources or mock flags; `plan` and review any replacement/destruction action. | Add preconditions/variables that prevent public DB and broad SSH where practical. | Lưu security controls note and tested plan. |
| Ngày 81 | Remote state/backends and CI integration with plan artifacts, environment separation. | Configure documented backend pattern (real only if existing secured bucket); integrate PR plan workflow. | Perform simulated PR: introduce tag/security change, inspect plan, approve/reject based on checklist. | Lưu PR template and plan review record. |
| Ngày 82 | Architecture diagrams and docs that prove operational understanding. | Create diagram (Mermaid/draw.io) with traffic, trust boundaries, state and monitoring; label cost-sensitive services. | Write run path `init → plan → apply → verify → destroy`; have a fresh terminal follow it. | Lưu diagram and `OPERATIONS.md`. |
| Ngày 83 | Code review, testing strategy, security/cost review and portfolio narrative. | Run fmt/validate/plan; inspect Git diff; check no state/secrets; test destroy plan without applying destruction blindly. | Prepare 3-minute explanation of module design and a state conflict incident answer. | Lưu `project-2-review.md`. |
| Ngày 84 | Project 2 release and month 3 checkpoint. | From clone/readme, execute safe validation and show CI; record real vs simulated components honestly. | Tag release; update portfolio evidence list; clean lab resources according to teardown. | Lưu `project-2-demo.md`; commit/push milestone. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-12-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 4 — Kubernetes (Tuần 13–16)
### Tuần 13 — Kubernetes fundamentals
**Mục tiêu tuần:** Hiểu Kubernetes qua object relationship, `describe`/`logs` debugging và deployment local tái tạo được.

**Guardrail:** Dùng kind/minikube local trước; không mở cluster dashboard/public service bừa. Xóa kind cluster/lab namespace cuối tuần khi không cần.

**Deliverable cuối tuần:** Có kind cluster local, manifest Deployment/Service/ConfigMap/Secret, runbook `kubectl` và debug evidence.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 85 | Control plane, node, kubelet, API server, scheduler, etcd, desired state and kubectl context. | Cài/kiểm tra kind; create cluster; run `kubectl cluster-info`, nodes, namespaces; export context safely. | Vẽ request flow from `kubectl apply` to scheduled Pod. | Lưu `cluster-setup.md` and teardown `kind delete cluster`. |
| Ngày 86 | Pod, ReplicaSet, Deployment, label/selector and rollout. | Deploy Nginx/hello app with 3 replicas; inspect `get`, `describe`, logs; change image and observe rollout history. | Roll back one bad image rollout; explain why Pods are not deployed directly for app lifecycle. | Lưu `deployment.yaml`, rollout evidence, `workload-runbook.md`. |
| Ngày 87 | Service ClusterIP/NodePort/LoadBalancer, DNS, Ingress concept and endpoint selection. | Expose app with ClusterIP/NodePort; curl from cluster/host; inspect endpoints and labels when service has none. | Fix selector mismatch scenario and verify endpoints are populated. | Lưu `service.yaml`, `service-debug.md`. |
| Ngày 88 | ConfigMap vs Secret, env/volume injection, base64 caveat and config reload decisions. | Inject nonsecret config from ConfigMap and placeholder secret into Pod; inspect safely without committing real values. | Change ConfigMap then explain why Pod restart/reload may be needed. | Lưu manifests, `.example` secret pattern, `config-management.md`. |
| Ngày 89 | Requests/limits, QoS, namespace, ResourceQuota, LimitRange and OOM/CPU throttling signals. | Apply resource requests/limits; create a constrained namespace; inspect Pod spec/events and avoid host exhaustion. | Write capacity estimate for 3 replicas and identify what metric validates it. | Lưu `resources.yaml`, `capacity-note.md`. |
| Ngày 90 | kubectl operational toolbox: get, describe, logs, exec, rollout, events, top, apply/delete/diff. | Complete 30-command checklist against local cluster; use each command for a specific question, not memorization. | Solve one crash loop by reading describe/logs before modifying manifest. | Lưu `kubectl-cheatsheet-by-question.md`. |
| Ngày 91 | Week review: delivery flow app → Deployment → Pod → Service. | From clean namespace deploy app, configure it, expose it, inject one failure and recover via rollout/manifest. | Write README with prerequisites, apply, verify, troubleshoot, delete namespace. | Lưu `week13-retro.md`; commit/push. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-13-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 4 — Kubernetes (Tuần 13–16)
### Tuần 14 — Storage, security và monitoring Kubernetes
**Mục tiêu tuần:** Vận hành state, security boundary and scaling in Kubernetes with evidence, not a collection of YAML snippets.

**Guardrail:** Không paste credentials into Secret YAML committed to Git. Use test values and `.example`; never disable security controls merely to make a demo green.

**Deliverable cuối tuần:** Có PVC/StatefulSet lab, RBAC/NetworkPolicy design, HPA notes và monitoring setup/runbook.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 92 | Volume, PV, PVC, StorageClass, access mode, reclaim policy and stateful data risks. | Deploy PostgreSQL/demo app with PVC local; write data, restart Pod, verify persistence; then delete controlled test namespace. | Explain why backup/restore still needed even with PVC. | Lưu `storage-lab.md`, manifest, teardown note. |
| Ngày 93 | StatefulSet, stable identity, headless service, ordered rollout and when not to run DB in cluster. | Deploy small Redis/StatefulSet or inspect manifest; observe pod names/volume identity and scale safely. | Compare StatefulSet vs Deployment for database workload and state migration risk. | Lưu `stateful-workloads.md`. |
| Ngày 94 | RBAC: ServiceAccount, Role/ClusterRole, RoleBinding, namespace scope and least privilege. | Create service account with only list/get configmaps in lab namespace; run `kubectl auth can-i` positive/negative tests. | Identify 3 dangerous broad permissions and replace with scoped alternative. | Lưu `rbac.yaml`, `rbac-tests.md`. |
| Ngày 95 | NetworkPolicy, ingress/egress, default deny, CNI limitation and application dependency map. | Design/apply policy allowing frontend → API → DB in compatible local cluster or YAML dry-run; test allowed/blocked flows. | Draw data flow and list DNS/metrics exceptions required before enforcement. | Lưu `network-policy.md`, manifests. |
| Ngày 96 | HPA, metrics-server, request dependency, scaling signals and noisy scaling trade-off. | Configure HPA for a test deployment or calculate expected behavior from manifests; generate/load mock requests if safe. | Write policy: min/max replicas, metric, cooldown, capacity prerequisite and rollback. | Lưu `autoscaling-design.md`. |
| Ngày 97 | Prometheus/Grafana architecture, scrape target, exporter, dashboard, alert and cardinality. | Install kube-prometheus-stack local only if resources allow, or use sample metrics; inspect targets and one dashboard panel. | Define alert `PodCrashLooping`/availability with runbook link and test signal source. | Lưu `k8s-monitoring-runbook.md`. |
| Ngày 98 | Review: production-like cluster needs state, access, network and observability jointly. | Tabletop incident: Pending Pod then CrashLoop then unauthorized API; use describe/events/log/auth check order. | Write incident report and one preventive control per failure. | Lưu `week14-retro.md`; commit/push. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-14-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 4 — Kubernetes (Tuần 13–16)
### Tuần 15 — Helm, GitOps và deployment patterns
**Mục tiêu tuần:** Đóng gói release và deployment strategy với Helm/GitOps để thay đổi có review, rollback và audit.

**Guardrail:** Không dùng Helm values chứa secret thật. GitOps repo must not grant unreviewed write access to production cluster.

**Deliverable cuối tuần:** Có Helm chart app nhỏ, rollback evidence, comparison rolling/canary/blue-green và GitOps design.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 99 | Helm chart, template, values, release, repo, upgrade/rollback and rendered-manifest review. | Install a known chart or create chart skeleton; use `helm template` and inspect generated YAML before install. | Change value image replica count; verify output changed only as expected. | Lưu `helm-basics.md`, values example. |
| Ngày 100 | Custom chart structure: Chart.yaml, templates, helpers, values schema and environment overrides. | Package existing app Deployment/Service/Ingress into chart; use dev/prod values without secrets. | Install in namespace, test health, run `helm lint` if available. | Lưu `charts/app/`, README install/upgrade/uninstall. |
| Ngày 101 | Rolling update, readiness, maxSurge/maxUnavailable, rollback and version traceability. | Deploy v1 then v2; inject readiness/image fault; observe rollout status and rollback to known-good release. | Record duration, verification command and rollback evidence. | Lưu `rolling-update-runbook.md`. |
| Ngày 102 | Canary deployment: traffic split, metric-based promotion, abort threshold and limitations. | Model canary 10%/90% with labels/Ingress/service or documented simulation; define success/error/latency criteria. | Write decision table promote/hold/rollback based on metrics. | Lưu `canary-strategy.md`. |
| Ngày 103 | Blue-green deployment: parallel environments, switch, database compatibility and fast rollback. | Model two versions and switch service selector; test switch/rollback in local cluster. | Compare rolling/canary/blue-green by risk, cost, complexity and DB migration compatibility. | Lưu `deployment-patterns-comparison.md`. |
| Ngày 104 | GitOps principles, desired state, reconciliation, Argo CD Application, sync status and drift. | Install/read Argo CD local if resources allow or create Application manifest; simulate Git change → desired state plan. | Write boundaries: who merges, who syncs, where secrets live, how to stop bad sync. | Lưu `gitops-operating-model.md`. |
| Ngày 105 | Review Helm/GitOps through a controlled change. | Make a PR-style change image tag + values, render/review, deploy to dev, test and rollback. | Document audit trail links/commit/release version and unanswered risk. | Lưu `week15-retro.md`; commit/push. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-15-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 4 — Kubernetes (Tuần 13–16)
### Tuần 16 — EKS và Project 3
**Mục tiêu tuần:** Làm rõ EKS trade-off và hoàn thiện Project 3 trước khi chi tiền cluster thật.

**Guardrail:** EKS control plane có phí. Chỉ tạo khi có ngân sách/giờ demo; đặt cleanup timer, tag resource và `eksctl delete cluster`/Terraform destroy ngay sau evidence.

**Deliverable cuối tuần:** Repo `kubernetes-eks-production-deploy` có Helm/GitOps/observability design, local demo và kế hoạch EKS cost-aware.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 106 | EKS architecture, control plane cost, managed node groups, eksctl vs Terraform, cluster baseline. | Write EKS creation plan/dry-run with region, version, node count, tags, estimate and deletion command; use local kind if no budget. | Decide go/no-go using budget, demo scope and teardown owner. | Lưu `eks-cost-and-creation-plan.md`. |
| Ngày 107 | EKS IAM/IRSA, node role, AWS Load Balancer Controller concept and trust boundaries. | Map required IAM roles/policies for cluster/node/service account; review sample IRSA trust policy. | Explain why node role should not give every pod AWS admin. | Lưu `eks-iam-boundaries.md`. |
| Ngày 108 | Port local manifests to cloud constraints: ingress, storage, DNS, image registry and observability. | Run app locally and build EKS deployment checklist; test image/Helm values/namespace/health readiness. | If EKS created, deploy time-boxed and collect evidence; otherwise mark output as local validation. | Lưu `eks-deploy-checklist.md`. |
| Ngày 109 | Cluster/pod autoscaling, HPA vs Cluster Autoscaler/Karpenter, resource requests and cost behavior. | Design scale test: traffic, expected HPA, node capacity; simulate in kind or inspect EKS design. | Write safeguards: max nodes/replicas, alert and stop condition. | Lưu `eks-scaling-design.md`. |
| Ngày 110 | Project 3 planning: microservice boundaries, chart, GitOps, SLO and incident scenarios. | Create repo/backlog; draw architecture with App, Postgres/Redis decision, Helm, Argo CD, Prometheus/Grafana. | Choose local proof and optional EKS proof; define acceptance tests/release criteria. | Lưu `PROJECT_3_DESIGN.md`. |
| Ngày 111 | Project 3 implementation/demo day. | Deploy app with Helm to local cluster; trigger one failure, inspect dashboard/logs, rollback; optionally EKS with cleanup timer. | Capture commands and screenshots; check no cluster cloud resources remain unnecessarily. | Lưu `PROJECT_3_DEMO.md`, teardown evidence. |
| Ngày 112 | Month 4 review: Kubernetes troubleshooting narrative and portfolio quality. | Practice interview: CrashLoopBackOff, Pending, Service no endpoint, bad rollout, IAM access; answer with first commands/evidence. | Finalize README, diagram and known limitations; delete local/EKS cluster if not needed. | Lưu `project-3-retro.md`; commit/push. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-16-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 5 — Observability, Security, SRE (Tuần 17–20)
### Tuần 17 — Monitoring và observability
**Mục tiêu tuần:** Biến metric/log/trace thành hành động vận hành có mục tiêu reliability và không tạo alert noise.

**Guardrail:** Không gửi webhook/alert vào channel người khác khi chưa được phép. Dùng test receiver/local email placeholder và redact request data nhạy cảm trong logs.

**Deliverable cuối tuần:** Có Prometheus/Grafana/Loki/CloudWatch query pack, SLO draft và alert/runbook có thể giải thích.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 113 | Observability pillars, pull model, Prometheus targets, metric type, labels and cardinality. | Run Prometheus/node_exporter local or inspect sample endpoint; query `up`, CPU/disk metrics; identify target down. | Design 5 labels/metrics for web app and reject one high-cardinality label. | Lưu `prometheus-basics.md` and query evidence. |
| Ngày 114 | PromQL selectors, rate, aggregation, histogram/latency, recording rules and alert expression. | Write/test 5 queries: up, CPU, request rate, 5xx ratio concept, p95 latency concept. | Explain which query indicates user impact vs infrastructure symptom. | Lưu `promql-query-pack.md`. |
| Ngày 115 | Grafana data source, dashboard panels, variables, visualization, annotations and dashboard as code concept. | Create/design dashboard with availability, latency, error rate, saturation; add deployment annotation manually/mock. | Perform dashboard review: every panel answers an operator question? | Lưu dashboard JSON/export or `grafana-dashboard-spec.md`. |
| Ngày 116 | Logging with Loki/Promtail, structured log fields, correlation/request IDs and retention. | Send/read app logs locally or use sample logs; search error around timestamp; connect metric spike to log evidence. | Define minimum log schema and privacy/redaction rules. | Lưu `logging-standard.md`, sample query/output. |
| Ngày 117 | CloudWatch custom metrics/log insights and AWS vs Prometheus roles. | Create/draft custom metric/log Insights query for app errors; compare alert path and retention cost. | Write selection matrix: CloudWatch only vs Prometheus vs hybrid. | Lưu `aws-observability-decision.md`. |
| Ngày 118 | Alertmanager routing, alert quality, severity, runbook, escalation, inhibition and noise control. | Create two alerts: service unavailable and disk forecast; attach condition, severity, owner, runbook, test path. | Review 3 bad alerts and rewrite them actionable. | Lưu `alert-rules-and-runbooks.md`. |
| Ngày 119 | SLI/SLO/SLA, error budget, reliability decision and week review. | Define availability and latency SLI for Project 1/3; calculate 99.9% monthly downtime and response when budget spent. | Tabletop alert → dashboard → log → mitigation → postmortem. | Lưu `slo-service-definition.md`; commit/push. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-17-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 5 — Observability, Security, SRE (Tuần 17–20)
### Tuần 18 — Security hardening
**Mục tiêu tuần:** Tăng security posture bằng least privilege, secret hygiene, image/K8s hardening và evidence thay vì checkbox.

**Guardrail:** Không enable paid AWS security services without budget/time limit. Never publish scan findings containing host/account details; remediate in lab and document safely.

**Deliverable cuối tuần:** Có security baseline, secret scan workflow, container/K8s controls and TLS hardening checklist.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 120 | AWS IAM least privilege, permission boundaries/SCP overview, access review and CloudTrail audit. | Review Project policies/SG with least privilege checklist; identify/remove one unnecessary action/rule in lab code. | Write quarterly access review runbook with evidence/owner. | Lưu `iam-hardening-review.md`. |
| Ngày 121 | GuardDuty, Security Hub, Inspector concepts, finding triage, severity and false positives. | Use console/docs/sample findings; create triage table finding → validate → contain → owner → closure evidence. | Decide which service is justified for small lab and cost/time boundary. | Lưu `aws-security-findings-playbook.md`. |
| Ngày 122 | Secrets Manager/SSM/Vault concepts, rotation, app injection, CI secret boundary and `.env.example`. | Migrate a fake hardcoded credential to environment/secret placeholder; scan Git history/current tree for secret patterns. | Write incident procedure when a secret was committed: revoke/rotate/audit, not merely delete line. | Lưu `secret-management.md`, safe `.env.example`. |
| Ngày 123 | Container supply chain: base image, SBOM concept, Trivy, non-root, capability/resource and image policy. | Scan local image if tool exists; otherwise perform manual Dockerfile review; remediate one issue such as root user/tag latest. | Add CI gate policy for critical findings with documented exception path. | Lưu `container-security-review.md`. |
| Ngày 124 | Kubernetes security: Pod Security Admission, RBAC, network policy, image pull policy and namespace isolation. | Apply/review restricted pod spec: runAsNonRoot, drop capabilities, read-only filesystem where possible; test broken then fix. | Map control to threat: privilege escalation, lateral movement, secret exposure. | Lưu `k8s-security-baseline.md`. |
| Ngày 125 | TLS, HTTP security headers, OWASP basics, input boundaries, WAF/Shield concepts. | Run `curl -I`/SSL check against own/test service; add HSTS/X-Content-Type-Options where appropriate; validate config. | Write hardening checklist and what not to claim without penetration test. | Lưu `web-security-hardening.md`. |
| Ngày 126 | Security checkpoint: review assets, threats, mitigations, detection and recovery. | Perform threat-model mini workshop for Project 1/3; choose top 5 risks and an implementable control each. | Review repo for secrets/state/log PII; create security issue backlog. | Lưu `security-retro.md`; commit/push. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-18-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 5 — Observability, Security, SRE (Tuần 17–20)
### Tuần 19 — Advanced CI/CD và GitOps
**Mục tiêu tuần:** Hiểu CI/CD/GitOps multi-environment as controlled change, artifact traceability và secret-safe deployment.

**Guardrail:** Không configure production apply without approvals. Separate dev/staging/prod data and credentials; test delete/lifecycle policies only on disposable artifacts.

**Deliverable cuối tuần:** Có environment promotion model, lifecycle policy, secret-safe deployment design và comparison GitOps/Jenkins/GitLab CI.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 127 | Environment strategy dev/staging/prod, config separation, promotion and approval gate. | Map one app release from branch to dev/staging/prod; define trigger, test, approver, config, rollback each stage. | Create deployment matrix that makes no undocumented manual action. | Lưu `environment-promotion-model.md`. |
| Ngày 128 | Artifact versioning, registry lifecycle, provenance and release retention. | Write ECR/Docker registry lifecycle rule draft; tag 10 sample versions and determine retained/deleted set. | Connect deployed version to Git commit, build log and changelog. | Lưu `artifact-lifecycle-policy.md`. |
| Ngày 129 | FluxCD vs Argo CD: reconciliation, UI/CLI, multi-tenancy, sync policy and team fit. | Compare using one concrete Project 3 workflow; create sample Kustomization/Application manifest or architecture diagram. | Choose one tool and justify based on operations overhead, not popularity. | Lưu `gitops-tool-decision.md`. |
| Ngày 130 | Sealed Secrets/External Secrets, KMS boundary, rotation and Git-safe secret reference. | Design secret flow from store → controller → Pod/CI; use fake secret metadata only. | Test/inspect a Secret reference manifest without storing value; define rotation test. | Lưu `external-secrets-design.md`. |
| Ngày 131 | Jenkins concepts: controller/agent, Jenkinsfile, credential store, pipeline stages and legacy ops trade-off. | Write a Jenkinsfile equivalent for existing CI pipeline or diagram it; compare security/maintenance with GitHub Actions. | Prepare interview answer: when maintain Jenkins instead of migrating immediately. | Lưu `jenkins-comparison.md`. |
| Ngày 132 | GitLab CI syntax, runner, stages, artifacts, environment and migration thought process. | Translate minimal lint/test/build workflow to `.gitlab-ci.yml`; validate logically against original behavior. | List vendor-neutral CI concepts you can carry across tools. | Lưu `.gitlab-ci.example.yml`, `ci-portability.md`. |
| Ngày 133 | Optimization and audit: pipeline time, cache correctness, supply chain and deployment trace. | Measure/review one CI run; improve only a safe bottleneck; ensure cache cannot mask missing dependency/test. | Write release audit trail example from commit to deployment/rollback. | Lưu `pipeline-optimization-retro.md`; commit/push. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-19-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 5 — Observability, Security, SRE (Tuần 17–20)
### Tuần 20 — SRE practices và Disaster Recovery
**Mục tiêu tuần:** Thực hành SRE through incidents, backup/restore and disaster recovery decisions backed by measured evidence.

**Guardrail:** Chaos only in local/disposable lab. Back up before destructive test; test restores on a separate target and never treat a backup as valid until restore is verified.

**Deliverable cuối tuần:** Có SLO/error-budget policy, incident kit, tested restore drill, RTO/RPO design and performance review.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 134 | SRE principles: SLI/SLO/SLA, error budget, toil and balancing feature velocity/reliability. | Refine SLO for two services; calculate monthly error budget and define freeze/escalation action. | Write a stakeholder update explaining user impact without metric jargon. | Lưu `sre-service-level-policy.md`. |
| Ngày 135 | Incident command, severity, roles, communication, runbook and postmortem quality. | Create incident template; run tabletop 30-minute web outage with commander/comms/ops roles even solo. | Draft first customer/internal update and final resolution update with timestamps. | Lưu `incident-kit.md`. |
| Ngày 136 | Chaos engineering hypothesis, blast radius, steady state, abort condition and learning objective. | On local K8s/Docker kill app/Pod or inject latency; observe alert/recovery; stop at defined abort condition. | Write experiment result, unexpected behavior and follow-up action. | Lưu `chaos-experiment-01.md`. |
| Ngày 137 | Backup/restore: snapshot, logical backup, S3 versioning, integrity, encryption and restore validation. | Perform restore drill of database/file archive to separate path/DB; run integrity/query checks and time it. | Calculate actual lab RPO/RTO and gap from target. | Lưu `restore-drill-01.md`. |
| Ngày 138 | DR strategies: backup/restore, pilot light, warm standby, active-active; RTO/RPO/cost trade-off. | Choose DR strategy for Project 1; draw failure domain and recovery steps; list dependencies often forgotten (DNS/secrets/IAM). | Write go/no-go checklist for DR test. | Lưu `dr-design.md`. |
| Ngày 139 | Performance triage: latency, saturation, database, CPU/memory, load test safety and capacity planning. | Run small local load test or analyze sample; record baseline, bottleneck hypothesis, one change and re-measurement. | Reject an optimization if no measurement improvement or it increases risk. | Lưu `performance-test.md`. |
| Ngày 140 | Month 5 reliability review: demonstrate detect → mitigate → restore → learn. | Run capstone incident: alert fires, triage dashboard/log, fix/rollback, restore one asset, write postmortem. | Update portfolio with real evidence/limitations and backlog next reliability improvement. | Lưu `month05-sre-capstone.md`; commit/push. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-20-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 6 — SAA-C03 & Job Readiness (Tuần 21–26)
### Tuần 21 — SAA-C03: Compute, storage và databases
**Mục tiêu tuần:** Ôn AWS architecture by scenarios and reinforce weak areas with labs, not by memorizing service names.

**Guardrail:** Practice questions are learning aids, not leaked exam content. Do not claim certification until passed and do not schedule exam until practice scores are consistently ready.

**Deliverable cuối tuần:** Có service decision map and practice-error notebook for compute/storage/database scenarios.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 141 | EC2, EBS, AMI, ASG, ALB/NLB, placement and compute selection scenario. | Solve 20 scenario questions; recreate one HA compute design diagram and test one EC2/ASG concept in existing lab. | Write decision cards: ALB vs NLB, EBS vs instance store, On-Demand vs Spot. | Lưu `saa-week21-day1.md` with wrong-answer rationale. |
| Ngày 142 | S3 versioning/lifecycle/replication/storage class, EFS/FSx and data durability choices. | Solve 20 storage scenarios; implement/inspect lifecycle/version restore in S3 lab or mock policy. | Create storage selection table based on access, latency, shared filesystem, archive, cost. | Lưu `storage-decision-map.md`. |
| Ngày 143 | RDS/Aurora/DynamoDB/ElastiCache, Multi-AZ/read replica, backup, performance and global patterns. | Solve 20 database scenarios; diagram read scale/failover; repeat local restore and measure. | Write decision cards: Multi-AZ vs read replica; RDS vs DynamoDB; cache use/risk. | Lưu `database-decision-map.md`. |
| Ngày 144 | Serverless: Lambda, API Gateway, event source, concurrency, timeout and Step Functions overview. | Solve 15 serverless scenarios; build/draw event flow S3 → event → Lambda → queue and identify retry/DLQ. | Explain why not every web workload should move to Lambda. | Lưu `serverless-tradeoffs.md`. |
| Ngày 145 | Messaging: SQS, SNS, EventBridge, Kinesis and decoupling patterns. | Solve 15 messaging scenarios; design order processing with queue, retry/DLQ and idempotency key. | Write failure-mode table consumer down/duplicate/event fanout. | Lưu `messaging-patterns.md`. |
| Ngày 146 | Mixed-domain architecture drills and elimination technique for exam questions. | Take timed 30-question mini exam; classify each wrong answer by concept gap vs reading error. | Recreate one wrong topic in lab/doc instead of only reading answer. | Lưu `saa-mini-exam-01-review.md`. |
| Ngày 147 | Week review and spaced repetition setup. | Review all decision cards; teach 5 service choices aloud with requirement → constraint → service → trade-off. | Set weak-topic queue for next week; record score and target not just confidence. | Lưu `week21-retro.md`; commit/push. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-21-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 6 — SAA-C03 & Job Readiness (Tuần 21–26)
### Tuần 22 — SAA-C03: Networking, HA, security và cost
**Mục tiêu tuần:** Giải scenario networking, high availability, security and cost using architecture reasoning.

**Guardrail:** Only use costs as estimates verified in calculator/console. Do not create Direct Connect/VPN/enterprise resources for study without an approved account and budget.

**Deliverable cuối tuần:** Có architecture decision cards for VPC/HA/security/cost and a second timed practice analysis.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 148 | VPC, subnet, route, IGW/NAT, endpoint, peering/TGW, VPN/Direct Connect and DNS. | Solve 20 networking questions; redraw private S3 access using VPC endpoint and compare NAT cost/security. | Write network decision tree from requirement to service. | Lưu `networking-decision-map.md`. |
| Ngày 149 | Route 53, CloudFront, Global Accelerator, ALB/NLB, multi-AZ and multi-region choices. | Solve 20 HA/global scenarios; diagram failover routing and identify health check/replication dependencies. | Explain active-passive vs active-active in 5 sentences. | Lưu `ha-and-edge-patterns.md`. |
| Ngày 150 | IAM, KMS, Organizations/SCP, WAF/Shield, CloudTrail/Config and security service selection. | Solve 20 security scenarios; turn 5 wrong answers into threat → control → evidence cards. | Review Project IAM/security matrix and improve one control/document. | Lưu `security-decision-map.md`. |
| Ngày 151 | Cost optimization: right-size, Savings Plans, Spot, S3 lifecycle, data transfer, tagging and Budgets. | Solve 15 cost scenarios; use AWS calculator/estimates for Project 1/3; list top 3 cost drivers. | Create monthly cost guardrail and cleanup schedule. | Lưu `cost-optimization-plan.md`. |
| Ngày 152 | Well-Architected Framework: operational excellence, security, reliability, performance, cost, sustainability. | Score Project 1 against all pillars; choose one gap per pillar with impact/effort. | Prioritize three fixes using risk × feasibility, not number of services. | Lưu `well-architected-review.md`. |
| Ngày 153 | Timed practice and error taxonomy. | Take 35-question timed exam; inspect every wrong/guessed answer and link it to a decision card or lab. | Redo 5 weakest scenario types after a break without notes. | Lưu `saa-mini-exam-02-review.md`. |
| Ngày 154 | Week review: architecture explanation to a non-exam audience. | Present one 5-minute design: requirements, diagram, trade-offs, failure/DR, cost and security. | Update flashcards/weak-topic queue and plan next deep work. | Lưu `week22-retro.md`; commit/push. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-22-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 6 — SAA-C03 & Job Readiness (Tuần 21–26)
### Tuần 23 — SAA-C03: Full practice và remediation
**Mục tiêu tuần:** Đạt mốc practice ổn định, hiểu sai ở đâu và quyết định lịch thi có trách nhiệm.

**Guardrail:** Không đăng ký thi dựa trên một lần điểm cao. Khi score thấp, ưu tiên xem lại root cause và lab thay vì làm đề liên tục.

**Deliverable cuối tuần:** Có 2 full mock exam review, remediation plan và tiêu chí rõ ràng cho việc đăng ký SAA-C03.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 155 | Exam strategy: đọc requirement, loại trừ, timebox, flag question, không suy diễn ngoài đề. | Làm 30 câu warm-up theo domain; build error taxonomy: knowledge, keyword, trade-off, time management. | Write personal exam protocol for 65-question mock. | Lưu `exam-strategy.md`. |
| Ngày 156 | Full mock 1: endurance, timing and evidence collection. | Làm 65 câu trong 90–130 phút không tra cứu; lưu score theo domain and unanswered/guessed list. | Không học thêm sau exam; chỉ phân loại error để tránh bias. | Lưu raw result and `mock-01-index.md`. |
| Ngày 157 | Mock 1 deep review: every wrong answer needs a principle, not only correct option. | Review 65 questions; choose top 10 weak concepts and reproduce 2 with architecture/lab. | Create flashcards including why tempting distractors are wrong. | Lưu `mock-01-review.md`. |
| Ngày 158 | Remediation compute/network/storage based on mock 1. | Study 3 weak topics for 45 min each; draw and explain 3 scenarios from blank page. | Retest 15 questions on same domains; target evidence of improvement. | Lưu `remediation-01.md`. |
| Ngày 159 | Remediation security/database/serverless based on mock 1. | Study 3 weak topics; update decision cards; run one relevant Project lab/checklist. | Retest 15 questions and compare accuracy with day 158. | Lưu `remediation-02.md`. |
| Ngày 160 | Full mock 2 and score trend. | Làm mock 2 timed; compare overall/domain score, time and error type to mock 1. | Identify whether improvement is stable or topic-specific. | Lưu `mock-02-index.md`. |
| Ngày 161 | Readiness decision and week review. | Review mock 2; set exam date only if ≥82% consistently and weak topics have explanations/labs; otherwise schedule remediation. | Update Plan A (ready) / Plan B (2 more weeks) without shame or shortcut. | Lưu `saa-readiness-decision.md`; commit/push. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-23-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 6 — SAA-C03 & Job Readiness (Tuần 21–26)
### Tuần 24 — Portfolio polishing
**Mục tiêu tuần:** Chuyển lab thành portfolio evidence: reproducible, technically honest, easy to evaluate and interview-ready.

**Guardrail:** Không fake screenshots, benchmark, certificate or production deployment. Mark clearly what is local, simulated and AWS-real; redact all IDs, IPs, secrets and personal data.

**Deliverable cuối tuần:** Ba repo portfolio có README/diagram/runbook/demo/cost/teardown rõ ràng và GitHub profile thể hiện đúng năng lực.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 162 | Portfolio evidence standard: problem, constraints, architecture, implementation, verification, failure/recovery, trade-off. | Audit Project 1 repo against rubric; create issue list for missing README, diagram, run command, evidence, teardown. | Fix highest-impact gap and verify clone instructions in clean terminal. | Lưu `portfolio-audit-project1.md`. |
| Ngày 163 | Technical README: audience, prerequisites, quickstart, diagram, configuration, verification, troubleshooting, cost and cleanup. | Rewrite Project 1 README with reproducible commands and reality labels; remove copy/paste boilerplate. | Ask: Can recruiter see the operational story in 90 seconds? | Lưu/readme change; screenshot rendered Markdown. |
| Ngày 164 | Architecture diagrams: C4-ish context/container, AWS icons/Mermaid, trust boundary, data flow, failure/observability. | Create/refine diagrams for Project 1 and Project 2; add legend and arrow meaning. | Check diagram matches code/resources and update mismatch rather than decorate. | Lưu diagram files and verification note. |
| Ngày 165 | Project 2 evidence: modules, plan review, CI pipeline, state/security decisions and destroy. | Audit/fix Project 2 README; add module examples, CI screenshot/link, plan review narrative and safe teardown. | Run fmt/validate/plan and record version/command evidence. | Lưu `portfolio-audit-project2.md`. |
| Ngày 166 | Project 3 evidence: Kubernetes manifests/chart, rollout/rollback, observability and local vs EKS scope. | Audit/fix Project 3 README; add debug scenario logs/commands, dashboard evidence and resource cleanup. | Run local kind demo from scratch or state exactly what blocks it. | Lưu `portfolio-audit-project3.md`. |
| Ngày 167 | GitHub profile, pinned repos, contribution quality, technical writing/blog and demo video principles. | Write GitHub profile README outline and one Vietnamese/English short technical post from a real incident/lab. | Record 2–3 minute demo script; no need to publish video until quality/review pass. | Lưu `github-profile-plan.md`, blog draft/script. |
| Ngày 168 | Portfolio review day: recruiter scan and deep technical scan. | Simulate 10-minute reviewer: open three repos, follow setup, read diagram/runbook, inspect commits; fix friction. | Update evidence inventory and label each item verified/local/simulated. | Lưu `portfolio-final-review.md`; commit/push. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-24-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 6 — SAA-C03 & Job Readiness (Tuần 21–26)
### Tuần 25 — CV, LinkedIn và chiến lược ứng tuyển
**Mục tiêu tuần:** Biến năng lực thành hồ sơ ứng tuyển cho Junior DevOps, Infrastructure/DevOps, Cloud Operations và System/Infrastructure Engineer.

**Guardrail:** Không bịa số liệu/kinh nghiệm/certification trong CV. Tailor CV to JD but protect personal data and do not send credentials or sensitive documents to recruiters.

**Deliverable cuối tuần:** Có CV một trang trung thực, LinkedIn/GitHub aligned, job tracker và ít nhất 5 ứng tuyển chất lượng đã tailor.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 169 | Job targeting: bridge roles, must-have vs nice-to-have, evidence mapping and salary/level reality. | Collect 10 JD recent relevant HCM/remote; extract common skills, on-call/English requirements and gaps. | Create keyword matrix mapping each skill to repo/lab/runbook evidence. | Lưu `jd-keyword-matrix.md`. |
| Ngày 170 | CV one-page structure: headline, summary, skills, experience, projects, impact and ATS-friendly wording. | Draft CV tailored Junior DevOps/CloudOps using real IT Ops + portfolio evidence; quantify only verifiable impact. | Review for vague claims (‘expert’, ‘production’) and replace with artifact/achievement. | Lưu `cv-cloud-devops-v1.md/pdf` if rendering is available. |
| Ngày 171 | Project bullets and STAR framing: action, tool, scope, result, trade-off. | Write 3 bullets each for Projects 1–3 and 5 IT Ops achievements; link GitHub where appropriate. | Run 30-second aloud test: each bullet understandable and defensible? | Lưu `cv-project-bullets.md`. |
| Ngày 172 | LinkedIn profile: headline, About, Featured, skills, open-to-work privacy and recruiter readability. | Update/draft profile text aligned to CV; add featured GitHub/demo evidence rather than generic certificate claims. | Prepare connection note/follow-up template that is specific and respectful. | Lưu `linkedin-profile-copy.md`. |
| Ngày 173 | Application workflow: job source, JD snapshot, tailoring, CV version, contacts, follow-up, outcome and learning. | Use CloudOps Duo tracker or `applications.csv`; add first 5 quality jobs and tailor 2 CV summaries. | Set follow-up date and next action for each; avoid mass-apply without notes. | Lưu `applications.csv` or tracker export. |
| Ngày 174 | Cover note/email and recruiter communication, salary expectation and availability framing. | Write 2 concise templates: referral/recruiter reply and direct application; personalize for 2 actual JDs. | Practice salary response: target range plus value/evidence, no false certainty. | Lưu `application-communication-templates.md`. |
| Ngày 175 | Week review: quality pipeline and feedback loop. | Submit/finalize 5 applications only after CV/JD/repo link check; update tracker and identify skill gaps appearing repeatedly. | Schedule next week interview drills around real JD gaps. | Lưu `week25-job-search-review.md`; commit/push private data only if safe. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-25-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Phase 6 — SAA-C03 & Job Readiness (Tuần 21–26)
### Tuần 26 — Phỏng vấn kỹ thuật và capstone job-ready
**Mục tiêu tuần:** Củng cố phỏng vấn kỹ thuật bằng lời giải có cấu trúc, troubleshooting thực hành và phản hồi trung thực.

**Guardrail:** Không trả lời phỏng vấn bằng cách phóng đại production access. Nếu chưa biết, nêu cách điều tra an toàn, tài liệu/lab liên quan và cách xác minh.

**Deliverable cuối tuần:** Có answer bank 50 câu, 2 mock interview, capstone incident demo and plan 30 ngày tiếp theo.

Duy trì 15 phút active recall ở đầu mỗi ngày; bốn cột dưới tương ứng 45 + 80 + 25 + 15 phút còn lại.

| Ngày | Học lõi — 45 phút | Guided lab — 80 phút | Tự làm lại/debug — 25 phút | Evidence — 15 phút |
|---|---|---|---|---|
| Ngày 176 | Linux/network interview: load, disk, service, DNS, port, SSH and incident triage. | Answer 10 questions aloud; run 3 live troubleshooting scenarios in WSL/local and record first commands/evidence. | Rewrite weak answers in STAR/diagnostic format without scripted jargon. | Lưu `interview-linux-network.md`. |
| Ngày 177 | Docker/CI/CD interview: image, compose, logging, security, pipeline failure, rollback and artifacts. | Answer 10 questions; demonstrate container crash → log → fix → CI check in one coherent flow. | Identify one trade-off in every answer, not only correct command. | Lưu `interview-docker-cicd.md`. |
| Ngày 178 | AWS/Terraform interview: VPC, IAM, EC2/S3, HA, state, module, plan/apply/destroy. | Answer 10 questions using Project diagrams; recreate EC2 no Internet and Terraform drift scenario explanation. | Check every claim against actual repo/runbook. | Lưu `interview-aws-terraform.md`. |
| Ngày 179 | Kubernetes/SRE interview: Pod failures, Service/Ingress, HPA, Helm/GitOps, SLI/SLO/alert/DR. | Answer 10 questions; simulate `CrashLoopBackOff` or Pending and explain describe/logs/rollback sequence. | Write concise 90-second answer for incident/postmortem/backup restore. | Lưu `interview-k8s-sre.md`. |
| Ngày 180 | Behavioral interview: collaboration, ownership, ambiguity, conflict, learning, incident communication. | Prepare 10 STAR stories rooted in IT Ops/labs; practice with timer and ensure Result is honest/measurable. | Ask yourself follow-up questions a skeptical interviewer would ask. | Lưu `interview-behavioral-star.md`. |
| Ngày 181 | Mock interview and portfolio walkthrough. | Run 60-minute mock: 20 min CV, 25 min technical, 15 min project demo; record gaps and retry 3 weakest answers. | Prepare questions to ask interviewer about stack, on-call, deployment/review and success criteria. | Lưu `mock-interview-01.md`. |
| Ngày 182 | Final capstone: job-ready evidence and next 30-day operating loop. | Demo one incident end-to-end: alert/log → diagnosis → safe fix/rollback → restore/check → postmortem; show 3 repos and job tracker. | Create 30-day cadence: 3 applications/week, 2 labs/week, 1 mock/week, portfolio refresh from feedback. | Lưu `job-ready-capstone.md`, `next-30-days.md`; commit/push milestone. |

**Checkpoint cuối tuần**

- Mở `TEMPLATE_NHAT_KY_3_GIO.md`, tổng kết blocker/decision và tạo `week-26-retro.md`.
- Rà lại mọi secret/state/log sensitive trước commit; với AWS, xác minh resource và chi phí trước khi kết thúc.
- Không đánh dấu hoàn thành nếu artifact không thể verify bằng command, test, screenshot an toàn hoặc peer/self-review.

## Mốc đánh giá theo phase

| Mốc | Tuần | Bằng chứng phải có |
|---|---:|---|
| Foundation checkpoint | 4 | Linux service/debug runbook, Docker Compose app, Git history và health-check automation |
| AWS checkpoint | 8 | IAM/VPC/EC2/S3/CloudWatch evidence, Project 1 architecture/deploy/cost/teardown |
| IaC & CI/CD checkpoint | 12 | Terraform modules/plan workflow, CI gates, Nginx/Ansible deploy/rollback, Project 2 |
| Kubernetes checkpoint | 16 | kind/Helm/GitOps/observability troubleshooting evidence, Project 3 and EKS cost decision |
| SRE checkpoint | 20 | SLO, alert/runbook, security review, restore drill, postmortem and DR design |
| Job-ready checkpoint | 26 | ≥3 portfolio repos reviewed, honest CV/LinkedIn, applications tracker, mock interview and next-30-day loop |

## Khi bị trễ lịch

Đừng “bỏ qua” ngày. Giữ thứ tự dependency và dùng quy tắc sau:

1. Nếu thiếu dưới 1 giờ: chỉ làm phần evidence/retro, không mở chủ đề mới.
2. Nếu thiếu 1 buổi: chuyển toàn bộ ngày sang buổi kế tiếp; ngày review cuối tuần trở thành buffer.
3. Nếu thiếu hơn 2 buổi/tuần: giữ nguyên tuần đó thêm một tuần. Cloud/DevOps cần thao tác thành thạo hơn tốc độ hoàn thành roadmap.
4. Nếu lab AWS bị chặn bởi budget: thay bằng diagram, CLI dry-run, local Docker/kind và ghi rõ **simulated/local**. Không bịa evidence AWS thật.

## Nguồn học ưu tiên

- Official docs: AWS Documentation/Skill Builder, Docker Docs, Kubernetes Docs, Terraform/HashiCorp Docs, GitHub Docs, Prometheus/Grafana Docs.
- Video đã audit trong `youtube_research.md` chỉ đóng vai trò bổ trợ; không copy transcript vào artifact.
- Mỗi khái niệm mới phải trả lời được: “nó giải quyết vấn đề vận hành nào, failure mode nào, cần command/metric gì để verify, rollback thế nào?”

---

Cập nhật: 2026-08. Lịch này ưu tiên tính thực hành, cost safety và bằng chứng portfolio hơn việc hoàn thành thật nhanh.
