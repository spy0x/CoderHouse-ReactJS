# Proyecto Final React JS - CoderHouse
##  Librería Los Tres Primos
#### Por Francisco Vargas - Comisión 44970
Aplicación Web Ecommerce desarrollada con React JS, MUI y Firebase.

![](https://coderhouse-fvd.web.app/logo192.png)

El sitio permite al usuario ver y agregar productos a su carrito (cart) y proceder a finalizar la compra (checkout), llenando un formulario de contacto (con validaciones), para luego conectarse a la base de datos y entregar un comprobante al usuario (ID generado por Firestore). 

El sitio puede navegarse desde su ruta principal, donde se muestran todos los productos disponibles, o por las categorías que filtran los títulos de alta popularidad (/books/category/top), y produtos nuevos (/books/category/new). Se creó además una ruta dinámica por el ISBN del producto que permite ingresar directamente al detalle del producto (/books/isbn/:id). No se hizo uso del ID autogenerado de Firestore, ya que el ISBN ya es un código único y universal para cada libro.
Adicionalmente se configuró otra ruta dinámica ingresando el nombre_apellido del autor, lo que permite solo visualizar los libros en venta del autor respectivo (/books/author/:author). No obstante, no se implementó en la interfaz para esta entrega, porque es una feature ideada para implementarse en un sistema de búsqueda para el sitio, lo que está fuera de lo requerido para esta entrega.

------------
Se hizo uso de las siguientes librerías adicionales a las requeridas para el curso:
- **sweetalert2**: Para el manejo de las notificaciones de error por validación. Fáciles de implementar y de interfaz simple y agradable.
- **mui/image**: Para customizar facilmente imágenes como componentes de MUI.
- **react-toastify**: Para el manejo de notificaciones de acciones del usuario (como producto agregado al carrito). Fáciles de implementar y de interfaz simple y agradable.