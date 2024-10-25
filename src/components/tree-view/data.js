export const sideMenu = [
    {
        label: "Home",
        to: "/",
    },
    {
        label: "Products",
        to: "/products",
        children: [
            {
                label: "Product 1",
                to: "/products/product-1",
                children: [
                    {
                        label: "Product 1.1",
                        to: "/products/product-1/product-1.1",
                    }
                ]
            },
            {
                label: "Product 2",
                to: "/products/product-2",
            },
            {
                label: "Product 3",
                to: "/products/product-3",
            },
        ],
    },
    {
        label: "Settings",
        to: "/settings",
        children: [
            {
                label: "Account",
                to: "/settings/account",
            },
            {
                label: "Security",
                to: "/settings/security",
                children: [
                    {
                        label: "Login",
                        to: "/settings/security/login",
                    },
                    {
                        label: "Logout",
                        to: "/settings/security/logout",
                    }
                ]
            }
        ]
    }
]

export default sideMenu;