# 🎮 LUẬT CHƠI — NEON SURVIVE

Game sinh tồn 1 mạng, càng sống lâu điểm càng cao. Đọc 1 phút là chơi được.

## 1. Bạn là ai?
- Bạn là **chấm tím** giữa màn hình.
- Map rộng **2400×2400** (gấp ~9 lần màn hình), có **viền tím** là biên. Không ra ngoài được.
- Xem vị trí ở **minimap** góc phải dưới: trắng là bạn, đỏ là địch, xanh là orb.

## 2. Mục tiêu
- **Sống càng lâu càng tốt.** Mỗi giây sống đều +điểm.
- **Ăn orb xanh** để +điểm nhiều + lên combo.

## 3. Cá lớn nuốt cá bé
- Bạn bắt đầu size **12**, ăn orb **+0.5** (tối đa **26**), lâu không ăn sẽ xẹp dần về 12.
- Địch nhỏ (~6-12) ăn được sớm. Địch to xuất hiện **nhiều dần (20% → 45%)**, size tăng theo **cấp số nhân 1.12^(thời gian/15s)**.
- **TITAN tím**: xuất hiện **mỗi 25 giây**, size = 26 + thời gian×0.3 (tối đa 46) — **luôn to hơn bạn, không bao giờ nuốt được**.
- Quy tắc chạm:
  - Bạn **to hơn địch trên 1 đơn vị** → **nuốt địch: +15 × combo**, địch biến thành **1 orb** ngay chỗ đó, bạn to thêm +0.8.
  - Ngược lại → **thua ngay**.
- Nhận biết nhanh: địch **viền xanh lá + chữ NUỐT = ăn được**, **viền đỏ + chữ TRÁNH = chạy**, **viền tím dày + chữ TITAN CHẠY = chạy ngay**. Số trên người bạn là size hiện tại, minimap cũng phân màu y hệt.

## 4. Tính điểm thế nào?
- Sống sót: +điểm mỗi giây (càng lâu càng nhiều).
- Ăn orb: **+10 × combo**.
- Nuốt địch nhỏ hơn mình: **+15 × combo** + nhả 1 orb.
- Combo: ăn orb/nuốt địch liên tiếp trong **4 giây** thì combo tăng dần lên tới **x8**. Hết 4 giây không ăn thì rớt về x1.
- Ví dụ: combo x5 ăn 1 orb = +50đ, nuốt 1 địch = +75đ.

## 5. Dash là gì?
- Bấm **Space** để **lướt nhanh + bất tử 0.4 giây**.
- Hồi chiêu **1.5 giây** (xem thanh xanh dưới 🏆).
- Dùng khi bị bao vây, không dùng bừa vì lúc cần lại chưa hồi.

## 6. Điều khiển + âm thanh
- **WASD** hoặc **←↑↓→**, hoặc **di chuột / chạm** — nhân vật chạy theo.
- **Space**: Dash. **R**: chơi lại ngay sau khi thua.
- **M** hoặc nút **🔊 góc trên**: tắt/mở tiếng. Lưu tự động trên máy.

## 7. Cách chơi 30 giây đầu cho người mới
1. 10s đầu: chỉ chạy vòng tròn nhỏ quanh giữa map + ăn orb **gần**, bỏ qua orb xa.
2. Khi thấy 3+ địch bu lại: Dash xuyên qua khe hở, chạy ra chỗ trống.
3. Luôn liếc minimap 2 giây/lần để không chạy vào góc chết (kẹt giữa địch + viền map).

## 8. Mẹo lên điểm cao
- Đầu game ăn orb lên size ~16 rồi đi săn địch nhỏ viền xanh để snowball.
- Thấy địch viền đỏ to hơn mình: bỏ chạy, ăn orb chỗ khác cho to ra rồi quay lại nuốt nó.
- Sau 50s đừng tham nuốt nữa: địch to theo cấp số nhân + TITAN dí, ưu tiên sống sót giữ combo.
- Giữ combo: đừng tham orb xa quá 4 giây, thà ăn orb gần giữ chuỗi.
- Chạy men theo viền map khi đông quá, địch chỉ tới từ 1 phía.
- Dash về phía **có orb**, vừa thoát vừa +điểm.

## 9. Thua rồi sao?
- Màn hình Game Over hiện điểm, thời gian sống, combo cao nhất.
- Bấm **Chơi lại (R)** là vào ván mới ngay, kỷ lục lưu trên máy bạn.

Chúc vui! Chơi ở `game.html`.
