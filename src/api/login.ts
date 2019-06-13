
import fetch from '@/utils/axios';


export function login(formData:any) {
    return fetch({
        url: `https://test-hantalk.hanmaker.com/login/old`,
        method: 'post',
        data: formData
    })
}
