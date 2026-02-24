window.CSS_QUESTIONS.push({
  qid: 'P3',
  path: 'questions/p3.html',
  category: '位置',
  title: 'モーダル（中央配置）',
  difficulty: '中級',
  stageClass: 'stage stage--light2',
  hint: '学ぶこと: inset / display: flex + align-items + justify-content で中央配置',
  stageHtml: `<div class="p3-demo">
  <div class="p3-overlay">
    <div class="p3-modal">
      <h3 class="p3-title">確認</h3>
      <p class="p3-text">変更を保存しますか？</p>
      <button class="p3-btn">OK</button>
    </div>
  </div>
</div>`,
  answerHtml: `<div class="p3-demo">
  <div class="p3-overlay">
    <div class="p3-modal">
      <h3 class="p3-title">確認</h3>
      <p class="p3-text">変更を保存しますか？</p>
      <button class="p3-btn">OK</button>
    </div>
  </div>
</div>`,
  answerCss: `.p3-demo {
  position: relative;
  height: 240px;
  background: #f5f5f5;
  border-radius: 8px;
}

.p3-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
}

.p3-modal {
  width: 280px;
  padding: 24px;
  background: #fff;
  border-radius: 8px;
}

.p3-title {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: #222;
}

.p3-text {
  margin: 0 0 20px;
  font-size: 14px;
  color: #555;
}

.p3-btn {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background: #0066cc;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}`
});
