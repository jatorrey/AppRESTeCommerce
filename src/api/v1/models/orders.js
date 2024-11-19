import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    IdInstitutoOK: { type: String },
    IdNegocioOK: { type: String },
    IdOrdenOK: { type: String },
    IdOrdenBK: { type: String },
    IdTipoOrdenOK: { type: String },
    IdRolOK: { type: String },
    IdPersonaOK: { type: String },
    IdVendedorOK: { type: String },
    estatus: [{
        IdTipoEstatusOK: { type: String },
        Actual: { type: String }, enum: ["S", "N"],
        Observacion: { type: String },
        detail_row: {
            Activo: { type: String }, enum: ["S", "N"],
            Borrado: { type: String }, enum: ["S", "N"],
            detail_row_reg: [{
                FechaReg: { type: Date },
                UsuarioReg: { type: String }
            }]
        }
    }],
    info_ad: [{
        IdEtiquetaOK: { type: String },
        IdEtiqueta: { type: String },
        Etiqueta: { type: String },
        Valor: { type: String },
        IdTipoSeccionOK: { type: String },
        Secuencia: { type: Number },
        detail_row: {
            Activo: { type: String }, enum: ["S", "N"],
            Borrado: { type: String }, enum: ["S", "N"],
            detail_row_reg: [{
                FechaReg: { type: Date },
                UsuarioReg: { type: String }
            }]
        }
    }]
});

export default mongoose.model("Order", orderSchema);