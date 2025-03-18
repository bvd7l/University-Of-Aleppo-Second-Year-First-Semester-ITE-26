document.getElementById('submitBtn').addEventListener('click', function () {
    const studentId = document.getElementById('studentId').value;
    if (studentId.length === 4) {
        this.classList.add('animated');
        setTimeout(() => {
            window.location.href = `student.html?id=${studentId}`;
        }, 500);
    } else {
        alert('الرجاء إدخال رقم جامعي صحيح مكون من 4 خانات');
    }
});