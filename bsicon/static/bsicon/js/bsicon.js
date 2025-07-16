document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.bsicon-selector-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const fieldId = this.dataset.fieldId;
            const url = this.getAttribute('href');
            const win = window.open(
                url, 
                'bsicon_selector',
                'width=800,height=600,resizable=yes,scrollbars=yes'
            );
            win.name = fieldId;
        });
    });
});
