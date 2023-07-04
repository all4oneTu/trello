import { type } from "os";

interface Board {
    columns : Map<TypedColumn>;
}

type TypedColumn = "todo" | "inprogress" | "done"