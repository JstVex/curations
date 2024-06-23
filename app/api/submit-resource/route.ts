import { google, sheets_v4 } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

type FormData = {
    title: string;
    link: string;
    category: string;
    subcat: string;
    additionalInfo: string;
};

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

export async function POST(req: NextRequest) {
    try {
        const body: FormData = await req.json();

        const { title, link, category, subcat, additionalInfo } = body;

        if (!title || !link) {
            return NextResponse.json({ message: 'Title and Link are required.' }, { status: 400 });
        }

        const auth = new google.auth.GoogleAuth({
            keyFile: path.join(process.cwd(), process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH as string),
            scopes: SCOPES,
        });

        const authClient = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: authClient }) as sheets_v4.Sheets;

        const spreadsheetId = process.env.GOOGLE_SHEET_ID as string;
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
        console.error('Error appending to sheet:', error);
        return NextResponse.json({ message: 'Failed to submit resource', error }, { status: 500 });
    }
}
