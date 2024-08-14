<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CardController extends Controller
{
    /**
     * Muestra una lista de tarjetas.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $cards = Card::all(); // Obtiene todas las tarjetas de la base de datos
        return response()->json($cards);
    }

    public function update(Request $request, $id)
    {
        // Validar la entrada
        $request->validate([
            'title' => 'required|string|max:255',
            'pdfLink' => 'nullable|url',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Encontrar la tarjeta
        $card = Card::findOrFail($id);

        // Actualizar los datos de la tarjeta
        $card->title = $request->input('title');
        $card->pdfLink = $request->input('pdfLink');

        // Manejar la imagen
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imagePath = $image->store('public/images'); // Guarda la imagen en storage/app/public/images
            $card->imageSrc = $imagePath;
        }

        // Guardar los cambios
        $card->save();

        return response()->json($card, 200);
    }
}
