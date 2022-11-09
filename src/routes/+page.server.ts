import type { Actions } from './$types';
import { invalid } from '@sveltejs/kit';
import { z } from 'zod';

const talentSchema = z.object({
	name: z.string().trim().min(1),
	role: z.enum(['frontend-engineer', 'backend-engineer', 'fullstack-engineer', 'architect']),
	email: z.string().trim().email().min(1)
});

export const actions: Actions = {
	default: async (event) => {
		const formDataa = Object.fromEntries(await event.request.formData());

		const talentData = talentSchema.safeParse(formDataa);

		if (!talentData.success) {
			const errors = talentData.error.errors.map((error) => {
				return {
					field: error.path[0],
					message: error.message
				};
			});

			return invalid(400, { error: true, errors });
		}
	}
};
