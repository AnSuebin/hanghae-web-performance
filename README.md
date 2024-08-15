## 웹 성능 개선 사후 보고서

### 개요
이 보고서는 웹 성능 테스트 프로젝트의 성능 개선 과정과 결과를 요약합니다.

### 주요 개선 사항
- 이미지 WebP 변환
- 히어로 이미지 사이즈 조정
- 구글 폰트 인라인 제거
- 쿠키 동의 JS 최적화
- 구글 태그 매니저 제거
  
### 성능 개선 결과
#### 개선 전
![스크린샷 2024-08-16 오전 5 42 25](https://github.com/user-attachments/assets/a819dd2d-b87f-4d78-af80-1b8bad4e303f)

#### 개선 후
![스크린샷 2024-08-16 오전 6 34 07](https://github.com/user-attachments/assets/3d800ed8-b01e-48c2-b71b-51fd46a07dba)

#### 상세 개선 내용
|항목 | 개선 전 | 개선 후 | 개선 이유 및 방법 |
|------|--------|--------|-----------------|
| 성능 | 55 | 85 | - 이미지 최적화 (WebP 변환)<br>- 불필요한 리소스 제거 (구글 폰트, 태그 매니저) |
| 접근성 | 82 | 89 | - 적절한 대체 텍스트 추가<br>- 색상 대비 개선 |
| 권장사항 | 96 | 96 | - 이미 높은 점수 유지 |
| 검색엔진 최적화 | 75 | 75 | - 변동 없음, 추가 개선 여지 있음 |

### 주요 개선 사항 상세 설명
#### 1. 이미지 WebP 변환
- 이유: 파일 크기 감소로 로딩 속도 향상
- 방법: 기존 이미지를 WebP 형식으로 변환
#### 2. 히어로 이미지 사이즈 조정
- 이유: 불필요하게 큰 이미지 크기 최적화
- 방법: 각 디바이스에 맞는 적절한 크기로 리사이징
#### 3. 구글 폰트 인라인 제거
- 이유: 외부 리소스 의존도 감소 및 로딩 시간 단축
- 방법: 시스템 폰트 사용 또는 폰트 파일 로컬 호스팅
#### 4. 쿠키 동의 JS 최적화
- 이유: 불필요한 스크립트 실행 감소
- 방법: 코드 최적화 및 필요한 기능만 유지
#### 5. 구글 태그 매니저 제거
- 이유: 페이지 로드 시간 단축
- 방법: 필수적이지 않은 추적 스크립트 제거

### 결론
성능 점수가 55에서 85로 크게 향상되었으며, 특히 이미지 최적화와 불필요한 리소스 제거가 주요 개선 요인이었습니다. 추가적인 SEO 최적화를 통해 검색엔진 최적화 점수를 더 높일 수 있을 것으로 보입니다.


 
