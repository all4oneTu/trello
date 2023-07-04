import { type } from "os";

interface Board {
    columns : Map<TypedColumn, string>;
}

type TypedColumn = "todo" | "inprogress" | "done"