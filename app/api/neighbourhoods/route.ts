import Neighbourhood from "@/app/models/neighbourhood";
import { supabaseClient } from "@/utils/supabase/client";
import { Point } from "geojson";
import wkx from "wkx";

export async function GET(request: Request) {
  // Extract query parameters for pagination
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const limit = 100; // Records per page
  const offset = (page - 1) * limit;

  // Fetch data from the database
  const { data, error } = await supabaseClient
    .from("neighbourhoods")
    .select("*")
    .range(offset, offset + limit - 1);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const transformedData: Neighbourhood[] = data.map((row) => {
    const neighbourhood: Neighbourhood = {
      id: row.id,
      name: row.name,
      country: row.country,
      altitude: row.altitude,
      location: null, // Default to null
    };

    if (row.location) {
      const buffer = Buffer.from(row.location, "hex");
      const geometry = wkx.Geometry.parse(buffer);
      neighbourhood.location = geometry.toGeoJSON() as Point;
    }

    return neighbourhood;
  });

  return new Response(JSON.stringify(transformedData), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
