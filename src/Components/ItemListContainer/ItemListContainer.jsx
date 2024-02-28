import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import './ItemListContainer.css'

import productosJson from "../../productos.json";


function simulaCarga(categoryId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(categoryId === undefined) {
        resolve(productosJson);
      }else {
        const productosFiltrados = productosJson.filter((item) => {
          return item.categoria === categoryId
        })
        if (productosFiltrados.length === 0) {
          reject("No hay elementos disponibles para esta categoría");
        }
        resolve(productosFiltrados)
      }

    }, 2000);
  });
}

export default function ItemListContainer({greeting}) {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    simulaCarga(categoryId).then((res) => setProductos(res));
  }, [categoryId]);

  return (
    <main>
      <h2 className="greeting">{greeting}</h2>
      <section className="item-list-container">
        {productos.map(( item) => (
          <div key={item.id}>
            <img src={item.imagen} alt={item.nombre} />
          <h2 >{item.nombre}</h2>
          <p>Precio = {item.precio}</p>
          </div>
        ))}
      </section>
    </main>
  );
}