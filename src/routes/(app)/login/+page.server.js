import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  // 如果有sessionId && 在DB找的到資料 跳轉到首頁
  // throw redirect(307,'/')  
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async function ({request}) {
    const form = await request.formData()
    const email = form.get('email')
    const password = form.get('password')
    if(!email) {
      return fail(400,{email, missing})
    }
    return fail(400, { pwd: true })
  }
};