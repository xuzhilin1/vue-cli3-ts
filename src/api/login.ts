
import fetch from '@/utils/axios';


export function login(formData: any) {
    return fetch({
        url: `login/old`,
        method: 'post',
        data: formData,
    });
}
