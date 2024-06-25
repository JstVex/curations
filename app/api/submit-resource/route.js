import { google } from 'googleapis';
import path from 'path';
import { NextResponse } from 'next/server';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

export async function POST(req) {
    try {
        const body = await req.json();

        const { title, link, category, subcat, additionalInfo } = body;

        if (!title || !link) {
            return NextResponse.json({ message: 'Title and Link are required.' }, { status: 400 });
        }

        const auth = new google.auth.GoogleAuth({
            keyFile: path.join(process.cwd(), process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH),
            scopes: SCOPES,
        });

        const authClient = await auth.getClient();

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

        return NextResponse.json({ message: 'Resource submitted successfully!' });

    } catch (error) {
        return NextResponse.json({ message: 'Failed to submit resource', error: error.message }, { status: 500 });
    }
}
