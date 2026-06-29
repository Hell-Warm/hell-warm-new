export async function POST(request) {
  try {
    const data = await request.json();
    console.log("HELL & WARM LEAD:", data);
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
