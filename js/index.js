// สร้างจุดและเพิ่มลงใน body
const dot = document.createElement('div')
dot.className = 'dot'
document.body.appendChild(dot)

// กำหนดตำแหน่งเริ่มต้นของจุด
let dotX = window.innerWidth / 2
let dotY = window.innerHeight / 2
let targetX = dotX
let targetY = dotY
const speed = 0.1 // ความเร็วในการเคลื่อนที่ของจุด

// ฟังก์ชันสำหรับปรับปรุงตำแหน่งของจุด
function animate() {
    dotX += (targetX - dotX) * speed
    dotY += (targetY - dotY) * speed

    dot.style.left = dotX + 'px'
    dot.style.top = dotY + 'px'

    requestAnimationFrame(animate) // เรียกฟังก์ชันนี้ใหม่ทุกๆ frame
}

// เริ่มการทำงานของฟังก์ชัน animate
requestAnimationFrame(animate)

// ตรวจจับการเคลื่อนที่ของเมาส์
document.addEventListener('mousemove', e => {
    targetX = e.clientX - 5 // ปรับเปลี่ยนเป้าหมายของตำแหน่ง X
    targetY = e.clientY - 5 // ปรับเปลี่ยนเป้าหมายของตำแหน่ง Y

    const button = document.querySelector('.button')
    const buttonRect = button.getBoundingClientRect()
    const buttonCenterX = buttonRect.left + buttonRect.width / 2
    const buttonCenterY = buttonRect.top + buttonRect.height / 2

    const distance = Math.hypot(
        e.clientX - buttonCenterX,
        e.clientY - buttonCenterY
    )

    // ถ้าระยะทางน้อยกว่า 50 ให้เพิ่มคลาส near-button
    if (distance < 50) {
        dot.classList.add('near-button')
    } else {
        dot.classList.remove('near-button')
    }
})