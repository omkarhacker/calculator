async function calculateSum() {
    const a = document.getElementById("input1").value;
    const b = document.getElementById("input2").value;

    try {
        const response = await fetch(`http://localhost:3000/sum?a=${a}&b=${b}`);

        if (response.ok) {
            const data = await response.json();
            document.getElementById("finalSum").innerText = `Sum: ${data.ans}`;
        } else {
            console.error('Failed to fetch');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}