#![allow(non_snake_case)]
#![cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows")]
//imports
use tauri::Manager;
use window_shadows::set_shadow;
//commands
#[tauri::command]
async fn close_splashscreen(window: tauri::Window) {
    // Close splashscreen
    if let Some(splashscreen) = window.get_window("splashscreen") {
        splashscreen.close().unwrap();
    }
    // Show main window
    window.get_window("main").unwrap().show().unwrap();
}
fn main() {
    tauri::Builder
        ::default()
        .setup(|app| {
            //shadow
            let splashscreen = app.get_window("splashscreen").unwrap();
            set_shadow(&splashscreen, true).expect("Unsupported platform!");
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![close_splashscreen]) //splash screen handler
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
