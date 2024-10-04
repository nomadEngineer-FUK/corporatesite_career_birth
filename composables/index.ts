export const useInquiry = () => useState('inquiry', () => {
    return {
        name: '',
        tell: '',
        email: '',
        inquiryContents: ''
    }
})

export const useConfirmation = () => useState('isConfirmed', () => false);
export const useSubmit = () => useState('isSubmited', () => false);

