import '/HijriDate/hijri-date-latest.js';
const hijriForm = document.querySelector('#hijriForm');
const fromHijri = document.querySelector('#fromHijri');

const fromMiladi = document.querySelector('#fromMiladi');
const gregForm = document.querySelector('#gregForm');

fromHijri.addEventListener('click', (soobixi) => {
    soobixi.preventDefault();
    hijriForm.style.display = 'block';
    gregForm.style.display = 'none';
    hijriForm.addEventListener('click', (event) => {
            event.preventDefault();
    
            const hijriDay = document.querySelector('#hijriDay');
            const hijriMonth = document.querySelector('#hijriMonth');
            const hijriYear = document.querySelector('#hijriYear');
    
            let hijriDayValue = Number(hijriDay.value);
            let hijriMonthValue = Number(hijriMonth.value);
            let hijriYearValue = Number(hijriYear.value);
    
            
            if (hijriYearValue != '' && hijriMonthValue != '' && hijriDayValue != '') {
                
                const nowGregDate = new HijriDate(hijriYearValue, hijriMonthValue, hijriDayValue);
                const dayGreg = nowGregDate.toGregorian();
                document.getElementById('display').innerHTML = dayGreg; 
                
            }
            
    })
})
fromMiladi.addEventListener('click', (soobixi) => {
    soobixi.preventDefault();
    hijriForm.style.display = 'none';
    gregForm.style.display = 'block';

gregForm.addEventListener('click', (e) => {
        e.preventDefault();

            const GregDay = document.querySelector('#GregDay');
            const GregMonth = document.querySelector('#GregMonth');
            const GregYear = document.querySelector('#GregYear');
        
            let GregDayValue = Number(GregDay.value);
            let GregMonthValue = Number(GregMonth.value);
            let GregYearValue = Number(GregYear.value); 

            if (GregYearValue != '' && GregMonthValue != '' && GregDayValue != '') {
                
                const nowHijriDate = new Date(GregYearValue, GregMonthValue, GregDayValue);

                const dayHijri = nowHijriDate.toHijri();
                console.log(dayHijri)
            
                document.querySelector('#displayGreg').textContent = dayHijri; 
                
            }
    })
})