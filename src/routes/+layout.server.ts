import { resolve } from '$app/paths'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async () => {
	const resolved = resolve('/')

	console.log(resolved)
}

export const prerender = true
export const trailingSlash = 'always'
