import "./ISS.css";

const Earth = () => {
  return (
    <div className="iss">
      <div className="foto"></div>
      <div className="desc">
        <h1>ISS</h1>
        <p>
          La Estación Espacial Internacional (EEI) representa un hito sin
          precedentes en la exploración espacial, siendo un proyecto
          colaborativo entre cinco agencias espaciales líderes: NASA, Roscosmos,
          JAXA, ESA y CSA/ASC. Situada en la órbita terrestre baja, la EEI es un
          laboratorio de investigación en microgravedad que acoge estudios en
          campos tan diversos como la astrobiología, la astronomía y la física.
          Además de ser un centro de investigación, la EEI desempeña un papel
          crucial en la preparación para futuras misiones de larga duración,
          como los viajes a la Luna y Marte. Desde su lanzamiento en 1998, ha
          albergado de forma continua a astronautas de diversas nacionalidades,
          promoviendo la cooperación internacional y la exploración espacial.
          Con una tripulación de hasta seis miembros, la EEI ha acogido a
          visitantes de 19 países y se ha convertido en un símbolo emblemático
          del ingenio humano en el espacio, operando con la expectativa de
          continuar su misión hasta al menos el año 2030. Seguimiento a tiempo
          real{" "}
          <a
            href="http://wsn.spaceflight.esa.int/iss/index_portal.php"
            target="_blank"
          >
            aqui
          </a>
        </p>
      </div>
    </div>
  );
};

export default Earth;
