from flask import Flask, request
import os  # os는 따로 임포트해야 합니다!

app = Flask(__name__)

# 업로드한 파일 저장 경로
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/upload', methods=['POST'])
def upload_file():
    # 1. 요청(request)에서 'file'이라는 이름으로 전송된 파일을 가져옵니다.
    # 이 줄이 추가되어야 'file' 변수를 사용할 수 있습니다.
    if 'file' not in request.files:
        return "파일 파트가 없습니다.", 400
        
    file = request.files['file']
    
    # 2. 사용자가 파일을 선택하지 않고 제출했을 경우 체크
    if file.filename == '':
        return "선택된 파일이 없습니다.", 400

    # 3. 파일 저장
    if file:
        file.save(os.path.join(UPLOAD_FOLDER, file.filename))
        return f'{file.filename} 업로드 성공!', 200

if __name__ == '__main__':
    app.run(debug=True)