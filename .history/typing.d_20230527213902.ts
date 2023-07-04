import { type } from "os";

interface Board {
    columns : Map<>;
}

type TypedColumn = "todo" | "in-progress" | "done