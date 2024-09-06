# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Örneğin bir api bağlama işlemi yapılacak şu şekilde olmalıdır.

- const dispatch = useAppDispatch();
- const userData = useAppSelector((state) => state.userValue?.data);

- useEffect(() => {
- dispatch(getUserData());
- }, []);

- const data = userData.data;
