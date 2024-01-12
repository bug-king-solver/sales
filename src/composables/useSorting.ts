import { Ref, ref } from 'vue';

type SortState<T> = {
    key: keyof T | '',
    isAscending: boolean
};

export function useSorting<T>() {
    const sortState: Ref<SortState<T>> = ref({
        key: '',
        isAscending: true
    });

    const toggleSort = (key: keyof T) => {
        if (sortState.value.key === key) {
            sortState.value.isAscending = !sortState.value.isAscending;
        } else {
            sortState.value.key = key;
            sortState.value.isAscending = true;
        }
    };

    const sortArray = (array: T[]) => {
        if (!sortState.value.key) return;

        array.sort((a, b) => {
            const key = sortState.value.key as keyof T;
            if (a[key] < b[key]) {
                return sortState.value.isAscending ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return sortState.value.isAscending ? 1 : -1;
            }
            return 0;
        });
    };

    return { sortState, toggleSort, sortArray };
}
