'use client';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export const LocalSwitcher = () => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    };
    return <label className=''>
        <p className='sr-only'>change language</p>
        <select
            defaultValue={localActive}
            className='bg-transparent py-2 font-semibold font-serif hover:text-red-900 transition-colors cursor-pointer'
            onChange={onSelectChange}
            disabled={isPending}
        >
            <option value='en'>English</option>
            <option value='pl'>Polish</option>
        </select>
    </label>
}