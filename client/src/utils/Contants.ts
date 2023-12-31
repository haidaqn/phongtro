interface MenuItem {
    label: string;
    key: string;
}

export const items: MenuItem[] = [
    {
        label: 'Trang chủ',
        key: '/',
    },
    {
        label: 'Cho thuê phòng trọ',
        key: '/cho-thue-phong-tro',
    },
    {
        label: 'Nhà cho thuê',
        key: '/nha-cho-thue',
    },
    {
        label: 'Căn hộ cho thuê',
        key: '/can-ho-cho-thue',
    },
    {
        label: 'Cho thuê mặt bằng',
        key: '/cho-thue-mat-bang',
    }
];
