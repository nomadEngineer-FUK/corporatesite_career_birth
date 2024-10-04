


export const inquiry = () => {
    
    const isConfirmed = useConfirmation(); // 「入力画面」「確認画面」の制御
    const isSubmited = useSubmit(); // 「入力画面」「確認画面」の制御
    const inquiry = useInquiry();

    // =============== [ロジック] ===============
    const toggleConf = (confVal: boolean) => {
        isConfirmed.value = confVal
    }

    // 送信ボタン押下
    const onSubmit = () => {
        isSubmited.value = true;
        resetInquiry();
    }

    // 送信後、inquiryで保持する内容をリセット
    const resetInquiry = () => {
        Object.assign(inquiry.value, {
            name: '',
            tell: '',
            email: '',
            inquiryContents: ''
        });
    };

    


    return {
        toggleConf,
        onSubmit,
        resetInquiry
    };

}