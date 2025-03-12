document.getElementById("infoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;

    var formUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"; // ضع رابط Google Forms هنا

    var formData = new FormData();
    formData.append("entry.YOUR_NAME_FIELD", name);
    formData.append("entry.YOUR_ADDRESS_FIELD", address);

    fetch(formUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors"
    }).then(() => {
        document.getElementById("responseMessage").textContent = "تم إرسال البيانات بنجاح!";
        document.getElementById("infoForm").reset();
    }).catch(() => {
        document.getElementById("responseMessage").textContent = "حدث خطأ، حاول مرة أخرى.";
    });
});
