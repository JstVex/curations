import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

export async function POST(req) {
    try {
        const body = await req.json();
        console.log('Received request body:', body);

        const { title, link, category, subcat, additionalInfo } = body;

        if (!title || !link) {
            console.log('Validation failed: Title and Link are required.');
            return NextResponse.json({ message: 'Title and Link are required.' }, { status: 400 });
        }

        const serviceAccountKey = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);

        const auth = new google.auth.GoogleAuth({
            credentials: serviceAccountKey,
            scopes: SCOPES,
        });

        const authClient = await auth.getClient();
        console.log('Authenticated client:', authClient);

        const sheets = google.sheets({ version: 'v4', auth: authClient });
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;
        const range = 'Sheet1!A:F';

        const resource = {
            values: [[title, link, category, subcat, additionalInfo]],
        };

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: 'RAW',
            requestBody: resource,
        });

        console.log('Resource appended successfully.');
        return NextResponse.json({ message: 'Resource submitted successfully!' });

    } catch (error) {
        console.error('Error appending to sheet:', error.message, error.stack);
        return NextResponse.json({ message: 'Failed to submit resource', error: error.message }, { status: 500 });
    }
}
