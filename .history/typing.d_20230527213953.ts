import { type } from "os";

interface Board {
    columns : Map<TypedColumn, Column>;
}

type TypedColumn = "todo" | "inprogress" | "done"

interface Column { 
    id: TypedColumn,
    
}