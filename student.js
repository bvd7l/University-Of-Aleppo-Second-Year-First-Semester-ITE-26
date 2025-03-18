const urlParams = new URLSearchParams(window.location.search);
const studentId = urlParams.get('id');


fetch('students.json')
    .then(response => response.json())
    .then(students => {
        const student = students.find(s => s.SID == studentId);

        if (student) {
            document.getElementById('studentName').textContent += student.Name;
            document.getElementById('studentSID').textContent += student.SID;
            document.getElementById('studentRank').textContent += student.rank;
            document.getElementById('studentAvg').textContent += student.AVG.toFixed(2);

            const grades = [
                { id: 'na1', value: student.NA1, name: 'التحليل العددي' },
                { id: 'p3', value: student.P3, name: 'البرمجة 3' },
                { id: 'p', value: student.P, name: 'الاحتمالات' },
                { id: 'lp', value: student.LP, name: 'البرمجة الرياضية' },
                { id: 'l3', value: student.L3, name: 'لغة أجنبية 3' },
                { id: 'c3', value: student.C3, name: 'تحليل 3' },
                { id: 'el', value: student.EL, name: 'الكترونيات' }
            ];

            grades.forEach(grade => {
                const element = document.getElementById(grade.id);
                element.textContent += grade.value;
                if (grade.value < 60) {
                    element.classList.add('low-grade');
                }
            });
        } else {
            document.querySelector('.container').innerHTML = `
                <h1>معلومات الطالب</h1>
                <p style="color: #e74c3c; font-weight: bold;">الطالب غير موجود</p>
            `;
        }
    })
    .catch(error => {
        console.error('حدث خطأ أثناء تحميل البيانات:', error);
        document.querySelector('.container').innerHTML = `
            <h1>معلومات الطالب</h1>
            <p style="color: #e74c3c; font-weight: bold;">حدث خطأ أثناء تحميل البيانات</p>
        `;
    });
