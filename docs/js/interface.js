const PenpaUI = {
    requestScripting() {
        return Swal.fire({
            title: PenpaText.get('scriptingMessageTitle'),
            html: PenpaText.get('scriptingMessage'),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: Color.RED,
            cancelButtonColor: Color.BLUE_SKY,
            confirmButtonText: PenpaText.get('scriptingConfirm'),
            cancelButtonText: PenpaText.get('scriptingCancel'),
        });
    }
};