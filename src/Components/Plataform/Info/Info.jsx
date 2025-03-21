import React, { useEffect, useState } from "react";
import Top from "./Top/Top";
import SoundSection from "./Sound/Sound";
import GeneralInfo from "./GeneralInformation/GeneralInfo";
import DescriptionSection from "./Descripcion/DescriptionSection";
import FunctionSection from "./Function/FunctionSection";
import ConservationSection from "./Conservation/ConservationSection";
import { useParams } from "react-router-dom";
import Model3D from "./Model3D/Model3D";
import { ClipLoader } from "react-spinners";


function InfoView() {
    const { registerId } = useParams();
    const [registerData, setRegisterData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!registerId) return;

        const fetchData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/admin_netzahualcoyotl/register_card/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ register_id: registerId }),
                });

                if (!response.ok) {
                    throw new Error("Error al obtener los datos");
                }

                const data = await response.json();
                setRegisterData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [registerId]);

    if (loading) {
        return (
            <div className="container text-center">
                <ClipLoader color="#007bff" size={100} />
                <p>Cargando información...</p>
            </div>
        );
    }
    if (error) return <p>Error: {error}</p>;
    if (!registerData) return <p>No se encontraron datos.</p>;

    return (
        <div className="container">
            {/* Encabezado con imagen y nombres */}
            <Top 
                photo={registerData.photo} 
                name={registerData.name} 
                scientific_name={registerData.scientific_name} 
            />

            {/* Sección de sonido */}
            <SoundSection soundUrl={registerData.sound} />

            <hr />

            {/* Modelo 3D */}
            <Model3D modelPath="https://parque-nezahualcoyotl.s3.us-east-2.amazonaws.com/3DModels/Dingus%20the%20cat.glb?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLWVhc3QtMiJIMEYCIQDu%2FdpKifVJSVNhP%2FlKYbHpZoQ%2Bkii3Hs7Qe3LBKyRIwwIhAKE6bjH0uYVIRlUnnjgv7nl8u57PSoNbYG6gnpcA6bRmKtADCIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMDE0ODc1NDE1Mzc5IgzvvHWFUkG0NjsOeF8qpAPZ1QFsMIYMpfkYhHUTNLMx01O2qsHM3Z4IJmD7lYlb0Vn4PQnw5ltHGo4LsyV1foQeuvGrHlyWc%2FNgxleKPiNCrZcjekgS8qWB1UxY%2FcRf2KmesYK5wWzMAeCwUR%2BKCJT9%2B2cOu4EKbWfvDgIfeQD4uxB4xitI551GVjmq4DOSiqTmK57RnZJwa%2B%2FlaN%2FgVChMir45bSD%2BQ%2FExmtLk1TzoAVjoGcYwG6JyhkCvbZMw2gUTBmhlNvVkzMpVXv90Fik3aCJZ8boHB703W%2FgSuRh%2F7flo8XLsyurpqt5OvVdOwuWSOCEizjLB6XLCQ92Qhjdf4Qm9q4uvxkmioCtkCJPr44GzlR8aH37XTC%2Biq9NDMvxrvQTZS7V6LZnPiZlN%2BUMHrD2MDvGNuYdZy1V5BcGBih8gYx1yHxhyYbFExeu1cea5ZQQ4RoJ6jSsJGqNgbzKvNKH2z%2F%2B7tkdHW8u6Tf9BrXB22b4jp%2B7I8D5MCQCVRsUwdwjRig1%2Bow3OeNwI1mBkcUeONso9zk9FrPW3K5H3Ayb%2FjVCUYc52Q4kvMWrhZ7w9pigw3LzuvgY64wL0v9HGfbfVPrM8sDaHGlsBDSdkO1Z6l%2FCrh7G2Fxvm1U1dXj037tn6eN8SAdf45S%2FuEm2Zzp7KMv3C13OwPKpPq%2Ff2CdExXx1M9YhZC1qOUqKSjnLJryQB9KwUH1ayuZjI96rcMdBcVydUOzYPO6%2BPwjeuT7ZuglpwRasRswTJImWrUi%2F7hi0mn7fQbcwqTFGGSdF3dH9dnz9EYtbYuRmyItfHZmRYPsVRtTgIQLVeKOUbhpkW0X%2Fwk08KTPRP0j%2BtP8zTel57Iq36Cav4I0g9KqCZzIxP1ZKBxi1YoSwsRWC%2BBhu7XCqcSwOjzfLdrrpkFX41qnopyUA6bwk0oXnql%2Bu3YYP5nnEeI2x8wgkqcuHUmr2LYBCW25gt5i3KK0Bp5NQzVgvKZrPEd1QBsoj6TCHCucM7xohUd5tcmpJ1FnGmbFCh4m1hyppZc%2BW%2FuI%2BvZj2tjaSXtYiuUswk4B1dwOaK&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAQG5VE2NJY32QAL4B%2F20250320%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T064111Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=f3bd021851bcadda7fe2739d7b5b939b21ac8375a3b661a140881bfcfccce3d4" />

            <hr />

            {/* Información general */}
            <GeneralInfo 
                scientificName={registerData.scientific_name} 
                habitat={registerData.habitats ?? []} 
                distribution={registerData.distribution} 
                feed={registerData.alimentations ?? []}
            />

            <hr />

            {/* Descripción */}
            <DescriptionSection 
                description={registerData.description} 
                image={registerData.photo} 
            />

            <hr />

            {/* Función ecológica */}
            <FunctionSection functionText={registerData.function} functionImage={registerData.alimentations?.map(feed => feed.photo) ?? []} />

            <hr />

            {/* Conservación */}
            <ConservationSection 
                status={registerData.status_id?.status ?? "No disponible"} 
                name_threats={registerData.threats?.map(threat => threat.name) ?? []} 
            />

            
        </div>
    );
}

export default InfoView;
